import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import styles from './index.scss';

export default class CustomControl extends React.Component {
    static propTypes = {
        /**
         * If the checkbox is checked or not
         */
        checked: PropTypes.bool,
        /**
         * CSS classes
         */
        className: PropTypes.string,
        /**
         * If the input field is disabled or not
         */
        disabled: PropTypes.bool,
        /**
         * ID of the input field
         */
        id: PropTypes.string,
        /**
         * Label for the input field
         */
        label: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
        /**
         * Name of the input field
         */
        name: PropTypes.string.isRequired,

        /**
         * Callback function called with the updated state
         */
        onChange: PropTypes.func,
        /**
         * Is it a checkbox or a radio button
         */
        type: PropTypes.oneOf(['checkbox', 'radio']),
        /**
         * Validation state the input field is currently in
         */
        validationState: PropTypes.oneOf(['default', 'valid', 'invalid']),
        /**
         * the value of the input field, which will be submitted
         */
        value: PropTypes.string,
    };

    static defaultProps = {
        checked: false,
        disabled: false,
        type: 'checkbox',
        validationState: 'default',
        value: '',
        onChange: () => {}
    };

    constructor(props) {
        super(props);

        this.state = {
            checked: this.props.checked
        };
    }

    /**
     * Function which will be called every time the checkbox state changes
     * @param event
     */
    toggleCheckbox = (event) => {
        if (!this.props.disabled) {
            this.setState({
                checked: !this.state.checked
            }, () => {
                // Callback
                this.props.onChange(this.state);
            });
        }

    };

    render() {
        const typeClassName = this.props.type === 'checkbox' ? 'custom-checkbox' : 'custom-radio';

        // Get validation state
        let inputStyle = styles['custom-control-input'];
        let labelStyle = styles['custom-control-label'];
        if (this.props.validationState === 'valid') {
            inputStyle = cx(styles['custom-control-input'], styles['is-valid']);
            labelStyle = cx(styles['custom-control-label'], styles['is-valid']);
        }
        if (this.props.validationState === 'invalid') {
            inputStyle = cx(styles['custom-control-input'], styles['is-invalid']);
            labelStyle = cx(styles['custom-control-label'], styles['is-invalid']);
        }

        return (
            <div className={styles['form-group']}>
                <div
                    className={cx(styles['custom-control'], styles[typeClassName])}
                    onClick={this.toggleCheckbox.bind(this)}
                >
                    <input checked={this.state.checked}
                           className={inputStyle}
                           disabled={this.props.disabled}
                           id={this.props.id}
                           name={this.props.name}
                           type={this.props.type}
                           value={this.props.value}
                    />
                    <label className={labelStyle}
                           htmlFor={this.props.id}
                    >
                        {this.props.label}
                    </label>
                </div>
            </div>
        );
    }
}
