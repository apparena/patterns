import React from 'react';
import {Card} from 'apparena-patterns-react';

export default class MyAwesomeClass extends React.Component{
    ...
    render(){
        return(
            <Card>
                <h4>This is the title of the card</h4>
                <p>This is the body of the card</p>
            </Card>
        )
    }
}