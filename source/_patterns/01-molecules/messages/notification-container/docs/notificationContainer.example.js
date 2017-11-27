import React from 'react';
import {Notification, NotificationContainer} from 'apparena-patterns-react';

export default function NotificationContainerExample() {
    const notifications = [
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
    ];
    return (
        <NotificationContainer
            notifications={notifications}
        />
    );
}
