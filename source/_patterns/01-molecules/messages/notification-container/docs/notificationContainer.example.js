import React from 'react';
import {Button, Notification, NotificationContainer, ReactComponent} from 'apparena-patterns-react';

export default class NotificationContainerExample extends ReactComponent {
    getInitState() {
        return {
            notifications: []
        }
    }

    showNotification() {
        const {notifications} = this.state;
        const notification = [
            <Notification
                header="This is the notification header #1"
                type="success"
            >
                <p> Some random content </p>
            </Notification>,
            <Notification
                header="This is the notification header #2"
                type="danger"
            >
                <p> Some random content </p>
            </Notification>,
            <Notification
                header="This is the notification header #3"
                type="info"
            >
                <p> Some random content </p>
            </Notification>
        ][Math.floor(Math.random()*3)];

        notifications.push(notification);

        this.setState({
            notifications
        });

        setTimeout(() => {
            const {notifications} = this.state;
            notifications.splice(0, 1);

            this.setState({
                notifications
            });
        }, 5000);
    }

    render() {
        return [
            <NotificationContainer
                notifications={this.state.notifications}
            />,
            <Button
                onClick={::this.showNotification}
            >
                Add a notification for 5 seconds
            </Button>
        ];
    }
}
