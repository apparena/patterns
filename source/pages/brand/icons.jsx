import React from 'react';
import {Card} from 'apparena-patterns-react';
import Icons from '../../patterns/00-atoms/icons/docs/icons.example';
import SyntaxHighlighter from 'react-syntax-highlighter/prism';
import {tomorrow} from 'react-syntax-highlighter/styles/prism';

const title = 'Icons';

function render() {
    return (
        <div>
            <Card>
                <div type="card-header">
                    Icon font
                </div>
                <div type="card-body">
                    You can use our icon font for free in your projects by just importing this CSS file.
                    <SyntaxHighlighter
                        language={'html'}
                        style={tomorrow}
                        showLineNumbers
                    >
                        {`<head>
...
<link href="https://aa-fonts.s3.amazonaws.com/app-arena/app-arena.css" rel="stylesheet">
...
</head>
...
<h1>Hey, here is an icon: <i class="icon icon-heart"></i></h1>
`}
                    </SyntaxHighlighter>
                </div>
            </Card>
            <Card>
                <div type="card-header">
                    Icons
                </div>
                <div type="card-body">
                    <Icons/>
                </div>
            </Card>
        </div>
    );
}

export default {
    title,
    render
};