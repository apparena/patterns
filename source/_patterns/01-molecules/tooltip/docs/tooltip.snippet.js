import React from 'react';
import {Tooltip} from 'apparena-patterns-react';

export default class MyAwesomeClass extends React.Component{
    render(){
        return(
            <Tooltip label="tooltip content">
                <Button>Example Children</Button>
            </Tooltip>
        )
    }
}