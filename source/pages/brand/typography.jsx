import React from 'react';
import {Card} from 'apparena-patterns-react';

const title = 'Typography';

function render() {
    const head = document.getElementsByTagName('head')[0];
    const alreadyInserted = Array.from(head.children).filter((child) => {
        return child.id === 'aa-css';
    }).length;

    if (!alreadyInserted) {
        const link = document.createElement('link');
        link.id = 'aa-css';
        link.rel = 'stylesheet';
        link.type = 'text/css';
        link.href = '/dist/styles/corporate-identity.css';
        head.appendChild(link);
    }

    return (
        <Card>
            <div type="card-header">
                Typography
            </div>
            <div type="card-body">
                <h1>Open Sans</h1>
                <p>
                    Our main type
                    is <a href={'https://fonts.google.com/specimen/Open+Sans?selection.family=Open+Sans'} target={'_blank'}>
                    Open Sans
                </a>
                </p>
            </div>
        </Card>
    );
}

export default {
    title,
    render
};