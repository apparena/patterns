import React from 'react';
import {Card, Button, Table} from 'apparena-patterns-react';

const title = 'Documents';

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
                <Table hover responsive>
                    <thead>
                    <tr>
                        <th>Title</th>
                        <th>Description</th>
                        <th>Download</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td>Brief-Vorlage</td>
                        <td>A4 Brief-Vorlage inkl. Anschreiben</td>
                        <td>
                            <Button type="link"
                                    href="https://s3.app-arena.com/marketing/corporate-identity/vorlagen/brief-vorlage.docx"
                            >
                                Download
                            </Button>
                        </td>
                    </tr>
                    <tr>
                        <td>Kündigung Geschäftsbeziehung-Vorlage</td>
                        <td>Kündigung einer Vertragsbeziehung.</td>
                        <td>
                            <Button type="link"
                                    href="https://s3.app-arena.com/marketing/corporate-identity/vorlagen/kuendigung.docx"
                            >
                                Download
                            </Button>
                        </td>
                    </tr>
                    </tbody>
                </Table>
            </div>
        </Card>
    );
}

export default {
    title,
    render
};