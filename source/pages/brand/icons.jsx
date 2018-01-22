import React from 'react';
import {Card} from 'apparena-patterns-react';
import Markdown from 'react-markdown';

const title = 'Icons';

function render() {
    return (
        <Card>
            <div type="card-header">
                Corporate identity
            </div>
            <div type="card-body">
                <Markdown
                    source={`
# Design an APP-ARENA Experience

## Principles, guidelines and assets for designing and building App-Arena experiences
                    `}
                />
            </div>
        </Card>
    );
}

export default {
    title,
    render
}