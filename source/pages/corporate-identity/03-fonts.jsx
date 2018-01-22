import React from 'react';
import {Card} from 'apparena-patterns-react';
import './styles.ci';

const title = 'Fonts';

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
                <div>Primary font: 'Ubuntu', Arial, sans-serif !default;</div>
                <div><em>Primary font italic: 'Ubuntu', Arial, sans-serif !default;</em></div>
                <div><strong>Primary font bold: 'Ubuntu', Arial, sans-serif !default;</strong></div>
                <div className="font-secondary__ci">Secondary font: Georgia, Times, "Times New Roman", serif;</div>
                <div className="font-secondary__ci"><em>Secondary font italic: Georgia, Times, "Times New Roman", serif;</em></div>
                <div className="font-secondary__ci"><strong>Secondary font bold; Georgia, Times, "Times New Roman", serif;</strong></div>
            </div>
        </Card>
    );
}

export default {
    title,
    render
}