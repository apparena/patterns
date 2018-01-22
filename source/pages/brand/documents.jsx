import React from 'react';
import {Card} from 'apparena-patterns-react';
import Markdown from 'react-markdown';

const exampleText = `
Corporate communication
`;

const title = 'Documents';

function render() {
    return (
        <Card>
            <div type="card-header">
                Corporate communication
            </div>
            <div type="card-body">
                <Markdown
                    source={exampleText}
                />
            </div>
        </Card>
    );
}

export default {
    title,
    render
}