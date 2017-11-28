import React from 'react';
import {Card} from 'apparena-patterns-react';
import Markdown from 'react-markdown';

const introText = `
This website documents all React components that are provided by the App-Arena GmbH.  
You can download the components via [NPM](https://www.npmjs.com/package/apparena-patterns-react).  
The components are open source and hosted on [GitHub](https://github.com/apparena/patterns).  

Use the sidebar on the left to navigate between components or use the search function to find what you're looking for.
`;

export default function Introduction() {
    return (
        <Card>
            <div type="card-header">
                Welcome to the App-Arena component library
            </div>
            <div type="card-body">
                <Markdown
                    source={introText}
                />
            </div>
        </Card>
    );
}