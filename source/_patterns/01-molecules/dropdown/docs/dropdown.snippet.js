import React from 'react';
import {Dropdown} from 'apparena-patterns-react';

export default class MyAwesomeClass extends React.Component{
    render(){
        return(
            <Dropdown buttonSize="lg" arrow="true">
                <p>This is an card item</p>
                <p>And this is one too</p>
            </Dropdown>
        )
    }
}