import React from 'react';
import {PopOver, Button} from 'apparena-patterns-react';

export default class MyAwesomeClass extends React.Component{
    render(){
        return(
            <PopOver 
            title="Popover title"
            content="Some space for the content of the popover"
            positioning="bottom" >
                <Button>An Example Children</Button>
            </PopOver>
        )
    }
}