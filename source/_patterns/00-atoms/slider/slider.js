import React from 'react';
import PropTypes from 'prop-types';
import Component from '../../react-utils/component';
import styles from './slider.scss';
import cx from 'classnames';

/**
 * Verifies min/max range.
 * @param   {Object} props         Properties of the React component.
 * @param   {String} propName      Name of the property to validate.
 * @param   {String} componentName Name of the component whose property is being validated.
 * @param   rest                   Everything else
 * @returns {Object} Returns an Error if min >= max otherwise null.
 */
const minMaxPropType = (props, propName, componentName, ...rest) => {
    const error = PropTypes.number(props, propName, componentName, ...rest);
    if (error !== null) {
        return error;
    }

    if (props.min >= props.max) {
        const errorMsg = (propName === 'min') ? 'min should be less than max' : 'max should be greater than min';
        return new Error(errorMsg);
    }
};

/**
 * Verifies value is within the min/max range.
 * @param   {Object} props         Properties of the React component.
 * @param   {String} propName      Name of the property to validate.
 * @param   {String} componentName Name of the component whose property is being validated.
 * @param   rest                   Everything else
 * @returns {Object} Returns an Error if the value is not within the range otherwise null.
 */
const valueInRangePropType = (props, propName, componentName, ...rest) => {
    const error = PropTypes.number(props, propName, componentName, ...rest);
    if (error !== null) {
        return error;
    }

    const value = props[propName];
    if (value < props.min || props.max < value) {
        return new Error(`${propName} should be within the range specified by min and max`);
    }
};

function getPercent(value, min, max) {
    let percent = (value - min) / (max - min);
    if (isNaN(percent)) {
        percent = 0;
    }

    return percent;
}

class Slider extends Component {
    static propTypes = {
        /**
         * The axis on which the slider will slide.
         */
        axis: PropTypes.oneOf(['x', 'x-reverse', 'y', 'y-reverse']),
        /**
         * The default value of the slider.
         */
        defaultValue: valueInRangePropType,
        /**
         * Disables focus ripple if set to true.
         */
        disableFocusRipple: PropTypes.bool,
        /**
         * If true, the slider will not be interactable.
         */
        disabled: PropTypes.bool,
        /**
         * The maximum value the slider can slide to on
         * a scale from 0 to 1 inclusive. Cannot be equal to min.
         */
        max: minMaxPropType,
        /**
         * The minimum value the slider can slide to on a scale
         * from 0 to 1 inclusive. Cannot be equal to max.
         */
        min: minMaxPropType,
        /**
         * The name of the slider. Behaves like the name attribute
         * of an input element.
         */
        name: PropTypes.string,
        /** @ignore */
        onBlur: PropTypes.func,
        /**
         * Callback function that is fired when the slider's value changed.
         *
         * @param {object} event KeyDown event targeting the slider.
         * @param {number} newValue The new value of the slider.
         */
        onChange: PropTypes.func,
        /**
         * Callback function that is fired when the slider has begun to move.
         *
         * @param {object} event MouseDown or TouchStart event targeting the slider.
         */
        onDragStart: PropTypes.func,
        /**
         * Callback function that is fired when the slide has stopped moving.
         *
         * @param {object} event MouseEnd or TouchEnd event targeting the slider.
         */
        onDragStop: PropTypes.func,
        /** @ignore */
        onFocus: PropTypes.func,
        /**
         * Whether or not the slider is required in a form.
         */
        required: PropTypes.bool,
        /**
         * Override the inline-styles of the inner slider element.
         */
        sliderStyle: PropTypes.object,
        /**
         * The granularity the slider can step through values.
         */
        step: PropTypes.number,
        /**
         * Override the inline-styles of the root element.
         */
        style: PropTypes.object,
        /**
         * The value of the slider.
         */
        value: valueInRangePropType
    };

    static defaultProps = {
        axis: 'x',
        disabled: false,
        disableFocusRipple: false,
        max: 1,
        min: 0,
        required: true,
        step: 0.01,
        style: {}
    };

    state = {
        active: false,
        dragging: false,
        focused: false,
        hovered: false,
        value: 0
    };
    track = null;
    handle = null;
    handleKeyDown = (event) => {
        const {
            min,
            max,
            step
        } = this.props;

        let action;

        if (action) {
            let newValue;

            // Cancel scroll
            event.preventDefault();

            switch (action) {
                case 'decrease':
                    newValue = this.state.value - step;
                    break;
                case 'increase':
                    newValue = this.state.value + step;
                    break;
                case 'min':
                    newValue = min;
                    break;
                case 'max':
                    newValue = max;
                    break;
                default:
                    newValue = this.state.value;
                    break;
            }

            // We need to use toFixed() because of float point errors.
            // For example, 0.01 + 0.06 = 0.06999999999999999
            newValue = parseFloat(newValue.toFixed(5));

            if (newValue > max) {
                newValue = max;
            } else if (newValue < min) {
                newValue = min;
            }

            if (this.state.value !== newValue) {
                this.setState({
                    value: newValue
                });

                if (this.props.onChange) {
                    this.props.onChange(event, newValue);
                }
            }
        }
    };
    handleDragMouseMove = (event) => {
        this.onDragUpdate(event, 'mouse');
    };
    handleTouchMove = (event) => {
        this.onDragUpdate(event, 'touch');
    };
    handleMouseEnd = (event) => {
        document.removeEventListener('mousemove', this.handleDragMouseMove);
        document.removeEventListener('mouseup', this.handleMouseEnd);

        this.onDragStop(event);
    };
    handleTouchEnd = (event) => {
        document.removeEventListener('touchmove', this.handleTouchMove);
        document.removeEventListener('touchup', this.handleTouchEnd);
        document.removeEventListener('touchend', this.handleTouchEnd);
        document.removeEventListener('touchcancel', this.handleTouchEnd);

        this.onDragStop(event);
    };
    handleTouchStart = (event) => {
        if (this.props.disabled) {
            return;
        }

        const position = event.touches[0]['clientX'] - this.getTrackOffset();
        this.setValueFromPosition(event, position);

        document.addEventListener('touchmove', this.handleTouchMove);
        document.addEventListener('touchup', this.handleTouchEnd);
        document.addEventListener('touchend', this.handleTouchEnd);
        document.addEventListener('touchcancel', this.handleTouchEnd);

        this.onDragStart(event);

        // Cancel scroll and context menu
        event.preventDefault();
    };
    handleFocus = (event) => {
        this.setState({
            focused: true
        });

        if (this.props.onFocus) {
            this.props.onFocus(event);
        }
    };
    handleBlur = (event) => {
        this.setState({
            focused: false,
            active: false
        });

        if (this.props.onBlur) {
            this.props.onBlur(event);
        }
    };
    handleMouseDown = (event) => {
        if (this.props.disabled) {
            return;
        }

        const position = event['clientX'] - this.getTrackOffset();
        this.setValueFromPosition(event, position);

        document.addEventListener('mousemove', this.handleDragMouseMove);
        document.addEventListener('mouseup', this.handleMouseEnd);

        // Cancel text selection
        event.preventDefault();

        // Set focus manually since we called preventDefault()
        this.handle.focus();

        this.onDragStart(event);
    };
    handleMouseUp = () => {
        if (!this.props.disabled) {
            this.setState({
                active: false
            });
        }
    };
    handleMouseEnter = () => {
        this.setState({
            hovered: true
        });
    };
    handleMouseLeave = () => {
        this.setState({
            hovered: false
        });
    };

    componentWillMount() {
        const {
            defaultValue,
            min,
            max
        } = this.props;

        let {value} = this.props;
        if (value === undefined) {
            value = defaultValue !== undefined ? defaultValue : min;
        }

        if (value > max) {
            value = max;
        } else if (value < min) {
            value = min;
        }

        this.setState({
            value
        });
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.value !== undefined && !this.state.dragging) {
            this.setState({
                value: nextProps.value
            });
        }
    }

    getTrackOffset() {
        return this.track.getBoundingClientRect()['left'];
    }

    onDragStart(event) {
        this.setState({
            dragging: true,
            active: true
        });

        if (this.props.onDragStart) {
            this.props.onDragStart(event);
        }
    }

    onDragUpdate(event, type) {
        if (this.dragRunning) {
            return;
        }
        this.dragRunning = true;

        requestAnimationFrame(() => {
            this.dragRunning = false;

            const source = type === 'touch' ? event.touches[0] : event;
            const position = source['clientX'] - this.getTrackOffset();

            if (!this.props.disabled) {
                this.setValueFromPosition(event, position);
            }
        });
    }

    onDragStop(event) {
        this.setState({
            dragging: false,
            active: false
        });

        if (this.props.onDragStop) {
            this.props.onDragStop(event);
        }
    }

    setValueFromPosition(event, position) {
        const positionMax = this.track['clientWidth'];
        let newPosition = position;
        if (position < 0) {
            newPosition = 0;
        } else if (position > positionMax) {
            newPosition = positionMax;
        }

        const {
            step,
            min,
            max
        } = this.props;

        let value;
        value = (newPosition / positionMax) * (max - min);
        value = (Math.round(value / step) * step) + min;
        value = parseFloat(value.toFixed(5));

        if (value > max) {
            value = max;
        } else if (value < min) {
            value = min;
        }

        if (this.state.value !== value) {
            this.setState({
                value
            });

            if (this.props.onChange) {
                this.props.onChange(event, value);
            }
        }
    }

    render() {
        const {
            axis, // eslint-disable-line no-unused-vars
            disabled,
            disableFocusRipple, // eslint-disable-line no-unused-vars
            max,
            min,
            name,
            onBlur, // eslint-disable-line no-unused-vars
            onChange, // eslint-disable-line no-unused-vars
            onDragStart, // eslint-disable-line no-unused-vars
            onDragStop, // eslint-disable-line no-unused-vars
            onFocus, // eslint-disable-line no-unused-vars
            required,
            step,
            style,
            ...other
        } = this.props;

        const {
            active,
            focused,
            hovered,
            value
        } = this.state;

        const percent = getPercent(value, min, max);

        let handleStyles = {};
        if (percent === 0) {
            handleStyles = cx(
                styles.handle,
                styles.handleWhenPercentZero,
                active && styles.handleWhenActive,
                (hovered || focused) && !disabled &&
                styles.handleWhenPercentZeroAndFocused,
                disabled && styles.handleWhenPercentZeroAndDisabled
            );
        } else {
            handleStyles = cx(
                styles.handle,
                active && styles.handleWhenActive,
                disabled && styles.handleWhenDisabled
            );
        }

        return (
            <div {...other} style={style}>
                <div
                    className={styles.slider}
                    onFocus={this.handleFocus}
                    onBlur={this.handleBlur}
                    onMouseDown={this.handleMouseDown}
                    onMouseEnter={this.handleMouseEnter}
                    onMouseLeave={this.handleMouseLeave}
                    onMouseUp={this.handleMouseUp}
                    onTouchStart={this.handleTouchStart}
                    onKeyDown={!disabled && this.handleKeyDown}
                >
                    <div ref={(node) => {
                        this.track = node;
                    }} className={styles.track}
                    >
                        <div className={styles.filledAndRemainingFill} style={{
                            left: 0,
                            marginRight: '1px',
                            width: `${percent * 100}%`
                        }}/>
                        <div className={styles.filledAndRemainingRemain} style={{
                            right: 0,
                            marginLeft: '1px',
                            width: `${(1 - percent) * 100}%`
                        }}/>
                        <div
                            ref={(node) => {
                                this.handle = node;
                            }}
                            className={handleStyles}
                            style={{left: percent === 0 ? '0%' : `${(percent * 100)}%`}}
                            tabIndex={0}
                        >
                        </div>
                    </div>
                </div>
                <input
                    type="hidden"
                    name={name}
                    value={value}
                    required={required}
                    min={min}
                    max={max}
                    step={step}
                />
            </div>
        );
    }
}

export default Slider;
