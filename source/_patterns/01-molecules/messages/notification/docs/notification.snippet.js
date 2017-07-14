import React from 'react';
import {Notification} from 'apparena-patterns-react';

export default class MyAwesomeClass extends React.Component{
    render(){
        return(
            <Notification type="warning" header="This is the header of the notification">
                <p>This is the place for some content</p>
            </Notification>
        )
    }
}