import React from 'react';
import {Notification} from 'apparena-patterns-react';

export default function NotificationExample(){
    return(
        <Notification 
        header="This is the notification header"
        type="success">
            <p> Some random content </p>
        </Notification>
    )
}

/*;;usage
<NotificationExample />
;;*/