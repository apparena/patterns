import React from 'react';
import {Media} from 'apparena-patterns-react';

export default class MyAwesomeClass extends React.Component {
    render() {
        return (
            <Media
                href="example.com"
                mediaBody="Enter a nice text for the media body"
                mediaBodyHeader="Enter a nice heading">
                <img src="example.com/image"/>
            </Media>
        );
    }
}