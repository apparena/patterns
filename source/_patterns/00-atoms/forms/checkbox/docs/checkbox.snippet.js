import React from 'react';
import {Checkbox, ReactComponent} from 'apparena-patterns-react';

export default class MyAwesomeClass extends ReactComponent {
    render() {
        return (
            <Checkbox onChange={::this.check}>
                Check Me Out!
            </Checkbox>
        );
    }
}