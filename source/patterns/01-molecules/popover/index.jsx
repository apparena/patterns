import React from 'react';
import PropTypes from 'prop-types';
import ReactComponent from '../../react-utils/component/index.jsx';
import cx from 'classnames';
import Portal from '../../react-utils/portal';
import Stick from '../../react-utils/stick';
import styles from './index.scss';

const POSITIONING = [
    'top',
    'top left',
    'top right',
    'bottom',
    'bottom left',
    'bottom right',
    'left',
    'left top',
    'left bottom',
    'right',
    'right top',
    'right bottom',
    'overlay'
];

const TYPE = [
    'primary',
    'secondary',
    'success',
    'info',
    'warning',
    'danger',
    'light',
    'dark'
];

export default class PopOver extends ReactComponent {
    static propTypes = {
        /**
         * Content that can trigger the popover on click
         */
        children: PropTypes.element.isRequired,
        /**
         * Additional classNames
         */
        className: PropTypes.string,
        /**
         * Heading of the popover
         */
        title: PropTypes.string,
        /**
         * Contents within the popover
         */
        content: PropTypes.element,
        /**
         * Should the popover be open by default?
         */
        open: PropTypes.bool,
        /**
         * Sets the position of the popover
         */
        positioning: PropTypes.oneOf(POSITIONING),
        /**
         * Color scheme of the popover
         */
        type: PropTypes.oneOf(TYPE),
        /**
         * Set the HTML zIndex property
         */
        zIndex: PropTypes.number
    };

    static defaultProps = {
        positioning: 'top',
        open: false,
        type: 'light',
        zIndex: 1060
    };

    getInitState() {
        return {
            open: this.props.open
        };
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.open !== this.state.open) {
            this.setState({
                open: nextProps.open
            });
        }
    }

    toggleTooltip() {
        this.setState({
            open: !this.state.open
        });
    }

    renderPopOver() {
        if (this.state.open) {
            return (
                <Portal>
                    <Stick
                        element={this._handler}
                        positioning={this.props.positioning}
                        zIndex={this.props.zIndex}
                        offset={10}
                    >
                        <div
                            className={cx(styles.popoverRoot, styles.popover, styles[`popover-${this.props.type}`], styles[`bs-popover-${this.props.positioning.split(' ')[0]}`], styles[this.props.positioning.split(' ')[1]])}
                        >
                            <div className={styles['arrow']}/>
                            {this.props.title && <h3 className={styles['popover-header']}>{this.props.title}</h3>}
                            <div className={styles['popover-body']}>
                                {this.props.content}
                            </div>
                        </div>
                    </Stick>
                </Portal>
            );
        }
    }

    render() {
        const {className} = this.props;
        return [
            <div
                className={className || styles.root}
                onClick={::this.toggleTooltip}
                ref={(c) => {
                    this._handler = c;
                }}
            >
                {this.props.children}
            </div>,
            this.renderPopOver()
        ];
    }
}