import React from 'react';
import {ProgressBar} from 'apparena-patterns-react';

export default class MyAwesomeClass extends React.Component{
    render(){
        return(
            <ProgressBar 
            value="80"
            maxValue="100"
            minWidth="2"
            type="success"/>
        )
    }
}