import React from 'react';
import PropTypes from 'prop-types';
import ReactComponent from '../../../react-utils/component';
import Icon from '../../../00-atoms/icons';
import cx from 'classnames';
import styles from './banner-message.scss';

const ALERT_TYPES = [
    'danger',
    'info',
    'success',
    'warning'
];

export default class Alert extends ReactComponent {
    static propTypes = {
        children: PropTypes.node.isRequired,
        type: PropTypes.oneOf(ALERT_TYPES).isRequired,
        className: PropTypes.string,
        icon: PropTypes.string.isRequired
    };

    static defaultProps = {
        type: 'info',
        classNames: ''
    };

    render() {
        const {type, className, icon, children} = this.props;
        const classes = cx(
            styles['m-banner-message'],
            styles[`m-banner-message-${type}`],
            className
        );

        return (
            <div className={classes}>
                <Icon name={icon}/>
                {children}
            </div>
        );
    }
}