import React from 'react';
import {Card} from 'apparena-patterns-react';
import Markdown from 'react-markdown';

const exampleText = `
Corporate identity
`;

export const title = 'Corporate identity';

export default function CIDocs() {
    return (
        <Card>
            <div type="card-header">
                Corporate identity
            </div>
            <div type="card-body">
                <Markdown
                    source={exampleText}
                />
            </div>
        </Card>
    );
}