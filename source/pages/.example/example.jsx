import React from 'react';
import {Card} from 'apparena-patterns-react';
import Markdown from 'react-markdown';

const exampleText = `
This website documents all React components that are provided by the App-Arena GmbH.  
You can download the components via [NPM](https://www.npmjs.com/package/apparena-patterns-react).  
The components are open source and hosted on [GitHub](https://github.com/apparena/patterns).  

This is just an example page, you can modify it or create your own. Don't forget to re-run the documentation
generator again if you want to see the results.
`;

export const title = 'Example Page';

export default function Example() {
    return (
        <Card>
            <div type="card-header">
                Welcome to the App-Arena component library!
            </div>
            <div type="card-body">
                <Markdown
                    source={exampleText}
                />
            </div>
        </Card>
    );
}