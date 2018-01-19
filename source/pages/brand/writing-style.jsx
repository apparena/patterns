import React from 'react';
import {Card} from 'apparena-patterns-react';
import Markdown from 'react-markdown';

const exampleText = `
Corporate communication
`;

export const title = 'Writing style';

export default function WritingStyle() {
    return (
        <Card>
            <div type="card-header">
                Writing style
            </div>
            <div type="card-body">
                <Markdown
                    source={exampleText}
                />
            </div>
        </Card>
    );
}