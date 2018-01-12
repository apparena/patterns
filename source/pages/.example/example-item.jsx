import React from 'react';
import {Button, Card} from 'apparena-patterns-react';
import Markdown from 'react-markdown';

const exampleText = `
This is an example sidebar item. All JSX files in a page's directory that are not named like the directory itself
will be inserted into the sidebar. These links will only be valid for the current page.
`;

export const title = 'Example Item';

export default function Example() {
    return (
        <Card>
            <div type="card-header">
                Example sidebar item
            </div>
            <div type="card-body">
                <Markdown
                    source={exampleText}
                />
                <Button type="primary">
                    This is just a demo button that does nothing
                </Button>
            </div>
        </Card>
    );
}