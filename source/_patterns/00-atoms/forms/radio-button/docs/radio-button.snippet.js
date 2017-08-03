import React from 'react';
import {RadioButton, ReactComponent} from 'apparena-patterns-react';

export default class MyAwesomeClass extends ReactComponent {
    render() {
        return (
            <RadioButton onChange={::this.check} text="Check Me Out!"/>
        );
    }
}