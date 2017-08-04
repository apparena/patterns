import React from 'react';
import PropTypes from 'prop-types';
import ReactComponent from './component';
import Notification from '../01-molecules/messages/notification';

export default class NotificationContainer extends ReactComponent {
    static propTypes = {
        notifications: PropTypes.array.isRequired
    };

    renderNotification(notification, key) {
        if (notification.props.header && notification.props.type) {
            return <Notification key={key} header={notification.props.header} type={notification.props.type}/>;
        } else {
            return null;
        }
    }

    render() {
        return (
            <div>
                {this.props.notifications.map(this.renderNotification, this)}
            </div>
        );
    }
}
