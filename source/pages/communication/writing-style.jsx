import React from 'react';
import {Card} from 'apparena-patterns-react';
import Markdown from 'react-markdown';

const title = 'Writing style';

function render() {
    return (
        <Card>
            <div type="card-header">
                Writing style
            </div>
            <div type="card-body">
                <Markdown
                    source={`
Corporate communication
`}
                />
            </div>
        </Card>
    );
}

export default {
    title,
    render
};