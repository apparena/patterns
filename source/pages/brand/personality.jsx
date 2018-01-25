import React from 'react';
import {Card} from 'apparena-patterns-react';

// Title defines the caption in the sidebar navigation
const title = 'Personality';

function render() {
    return [
        <Card key={'1'}>
            <div type="card-header">
                Personality
            </div>
            <div type="card-body">

                <h2>We are digital gladiators!</h2>

                <p>
                    We do everything to make our client successful! We are fast, professional and have a deep knowledge on
                    digital marketing and commerce!
                </p>


            </div>
        </Card>,

    ];
}

export default {
    title,
    render
}