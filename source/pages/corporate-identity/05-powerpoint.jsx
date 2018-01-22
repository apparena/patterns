import React from 'react';
import {Card} from 'apparena-patterns-react';
import './styles.ci';

const title = 'Powerpoint';

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
                Logos
            </div>
            <div type="card-body">
                <h1>Powerpoint presentation templates</h1>
            </div>
        </Card>
    );
}

export default {
    title,
    render
}