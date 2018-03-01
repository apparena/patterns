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
<link href="https://brand.app-arena.com/fonts/app-arena-icons.css" rel="stylesheet">
...
</head>
...
<h1>Hey, here is an icon: <i class="aa-icon aa-icon-heart"></i></h1>

`}
                    </SyntaxHighlighter>

                    You can download as well the SCSSS
                    file <a href="https://brand.app-arena.com/fonts/app-arena-icons.css">https://brand.app-arena.com/fonts/app-arena-icons.css</a>
                    or use all icons using the corresponding <a href="https://brand.app-arena.com/#/ui-patterns/Icons">React
                    Icon component</a>.

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