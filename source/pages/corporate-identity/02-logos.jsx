import React from 'react';
import {Card} from 'apparena-patterns-react';
import './styles.ci';

const title = 'Logos';

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
                <img src="/assets/logo.svg" className="logo" alt="App Arena GmbH"/>
            </div>
        </Card>
    );
}

export default {
    title,
    render
}