import React from 'react';
import PropTypes from 'prop-types';
import ReactComponent from '../../../react-utils/component/index.jsx';
import cx from 'classnames';
import styles from './index.scss';
import Icon from '../../../00-atoms/icons/index';

const typeIcons = {
    info: 'info-circle',
    success: 'check',
    warning: 'exclamation-triangle',
    danger: 'exclamation-circle'
};

export default class Notification extends ReactComponent {
    static propTypes = {
        /**
         * Text to display as a heading for the notification
         */
        header: PropTypes.string.isRequired,
        /**
         * Content of the notification
         */
        children: PropTypes.node,
        /**
         * Set the default styling
         */
        type: PropTypes.oneOf(['info', 'success', 'warning', 'danger']).isRequired,
        /**
         * Deprecated
         */
        duration: PropTypes.number,
        /**
         * Additional classNames for the notification
         */
        className: PropTypes.string,
        /**
         * Function that's executed when the notification's close button is pushed. Additionally renders a close button
         */
        onClose: PropTypes.func,
        /**
         * Deprecated
         */
        fixed: PropTypes.bool
    };

    static defaultProps = {
        fixed: true
    };

    renderDismissibleIcon() {
        if (this.props.onClose) {
            return (
                <div onClick={this.props.onClose}><Icon name={'times'} className={styles.close}/></div>
            );
        }
    }

    render() {
        const {className, type, header, children, fixed} = this.props;
        const iconName = typeIcons[type];

        return (
            <div className={cx(styles['m-notification'], fixed && styles.fixed, className)}>
                <div className={cx(styles.content, styles[type])}>
                    {this.renderDismissibleIcon()}
                    <Icon name={iconName} className={styles.icon}/>
                    <div className={cx(styles['title-messages'])}>
                        <strong>{header}</strong> {children}
                    </div>
                </div>
            </div>
        );
    }
}
