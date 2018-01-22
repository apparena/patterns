import React from 'react';
import {Card} from 'apparena-patterns-react';
import Markdown from 'react-markdown';

const title = 'Colors';

function render() {
    return (
        <Card>
            <div type="card-header">
                Colors
            </div>
            <div type="card-body">
                <Markdown
                    source={`
# The colors of App-Arena

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