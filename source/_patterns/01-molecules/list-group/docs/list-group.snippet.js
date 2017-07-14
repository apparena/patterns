import React from 'react';
import {ListGroup} from 'apparena-patterns-react';

export default class MyAwesomeClass extends React.Component{
    render(){
        return(
            <ListGroup listItems={["Task 1", "Task 2", "Task 3"]} />
        )
    }
}