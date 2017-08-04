import React from 'react';
import {ReactComponent, Tag} from 'apparena-patterns-react';

export default class MyAwesomeClass extends ReactComponent {
    render() {
        return (
            <Tag type="primary" pill="true">
                Here you could place some text
            </Tag>
        );
    }
}