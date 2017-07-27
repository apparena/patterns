import React from 'react';
import {Card} from 'apparena-patterns-react';

export default function CardExample(){
    return(
        <Card>
            <div type="card-header">
                <h4>This is the title of the card</h4>
            </div>
            <div type="card-block">
                <p>This is the body of the card</p>
            </div>
        </Card>
    )
}