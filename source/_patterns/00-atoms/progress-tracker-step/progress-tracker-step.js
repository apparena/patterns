import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import ReactComponent from '../../react-utils/component';
import styles from './progress-tracker-step.scss';

export default class ProgressTrackerStep extends ReactComponent {
    static propTypes = {
        /**
         * Additional classNames for the step
         */
        className: PropTypes.string,
        /**
         * Should this step be activated?
         */
        active: PropTypes.bool,
        /**
         * ID for the HTML element
         */
        id: PropTypes.string,
        /**
         * Deprecated
         */
        href: PropTypes.string,
        /**
         * Function to execute when the step is clicked
         */
        onClick: PropTypes.func,
        /**
         * Text do display beneath the step
         */
        text: PropTypes.string
    };

    static defaultProps = {
        active: false
    };

    render() {
        return (
            <li className={cx(styles['progress-tracker-step'], this.props.className, (this.props.active) ? styles['progress-tracker-step-active'] : '')}
                id={this.props.id}
                href={this.props.href}
                style={this.props.style}
                onClick={(this.props.onClick) ? this.props.onClick : null}
            >
                <span>{this.props.text}</span>
            </li>
        );
    }
}