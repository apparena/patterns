import React from 'react';
import {ReactComponent, TagInput} from 'apparena-patterns-react';

export default class MyAwesomeClass extends ReactComponent {
    render() {
        return (
            <TagInput onChange={::this.change} options={['action', 'sci-fi', 'western']}/>
        );
    }
}