import React from 'react';
import {Button, PopOver} from 'apparena-patterns-react';

export default class MyAwesomeClass extends React.Component {
    render() {
        return (
            <PopOver
                title="Popover title"
                content="Some space for the content of the popover"
                positioning="bottom">
                <Button>An Example Children</Button>
            </PopOver>
        );
    }
}