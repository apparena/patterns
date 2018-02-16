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
        <div>
            <Card>
                <div type="card-header">
                    Briefe & Vertragsvorlagen
                </div>
                <div type="card-body">
                    <Table hover responsive>
                        <tbody>
                        <tr>
                            <td>
                                <img src="https://s3.app-arena.com/patterns/atoms/icons/file-docx.svg" alt="Word document"/>
                            </td>
                            <td>Brief-Vorlage</td>
                            <td>A4 Brief-Vorlage inkl. Anschreiben</td>
                            <td>
                                <Button type="link"
                                        href="https://s3.app-arena.com/brand/documents/brief-vorlage.docx"
                                >
                                    Download
                                </Button>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <img src="https://s3.app-arena.com/patterns/atoms/icons/file-docx.svg" alt="Word document"/>
                            </td>
                            <td>Kündigung Geschäftsbeziehung-Vorlage</td>
                            <td>Kündigung einer Vertragsbeziehung.</td>
                            <td>
                                <Button type="link"
                                        href="https://s3.app-arena.com/brand/documents/kuendigung.docx"
                                >
                                    Download
                                </Button>
                            </td>
                        </tr>
                        </tbody>
                    </Table>
                </div>
            </Card>
            <Card>
                <div type="card-header">
                    Datenschutz
                </div>
                <div type="card-body">
                    <Table hover responsive>
                        <tbody>
                        <tr>
                            <td>
                                <img src="https://s3.app-arena.com/patterns/atoms/icons/file-docx.svg" alt="Word document"/>
                            </td>
                            <td>ADV-Vertrag</td>
                            <td>Vorlage des ADV-Vertrags zum Abschluss mit Kunden.</td>
                            <td>
                                <Button type="link"
                                        href="https://s3.app-arena.com/brand/documents/datenschutz/Datenschutzbestimmungen_Template.docx"
                                >
                                    Download
                                </Button>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <img src="https://s3.app-arena.com/patterns/atoms/icons/file-docx.svg" alt="Word document"/>
                            </td>
                            <td>ADV-Vertrag - Anlage 1</td>
                            <td>Zusatzvereinbarungen für Enterprise Kunden.</td>
                            <td>
                                <Button type="link"
                                        href="https://s3.app-arena.com/brand/documents/datenschutz/Datenschutzbestimmungen_Template.docx"
                                >
                                    Download
                                </Button>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <img src="https://s3.app-arena.com/patterns/atoms/icons/file-pdf.svg" alt="PDF document"/>
                            </td>
                            <td>Bestellungsurkunde des Datenschutz-Beauftragten</td>
                            <td>Unterschriebenes Dokument zum Nachweis der Bestellung eines Datenschutz-Beauftragten.
                            </td>
                            <td>
                                <Button type="link"
                                        href="https://s3.app-arena.com/brand/documents/datenschutz/Bestellung-Datenschutzbeauftragter.pdf"
                                >
                                    Download
                                </Button>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <img src="https://s3.app-arena.com/patterns/atoms/icons/file-docx.svg" alt="Word document"/>
                            </td>
                            <td>Verpflichtungserklärung zum Datengeheimnis & Einweisung in den Datenschutz</td>
                            <td>Alle Mitarbeiter unterschreiben zum Vertragbeginn diese Vereinbarung und Verpflichten
                                sich zur Geheimhaltung und Nicht-Weitergabe personenbezogener Daten.
                            </td>
                            <td>
                                <Button type="link"
                                        href="https://s3.app-arena.com/brand/documents/datenschutz/Verpflichtungserklärung-Datenschutz-Einweisung-Mitarbeiter.docx"
                                >
                                    Download
                                </Button>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <img src="https://s3.app-arena.com/patterns/atoms/icons/file-docx.svg" alt="Word document"/>
                            </td>
                            <td>Bestätigung der Datenlöschung</td>
                            <td>Schriftliche Bestätigung der Datenlöschung für einen Kunden.</td>
                            <td>
                                <Button type="link"
                                        href="https://s3.app-arena.com/brand/documents/datenschutz/Bestaetigung-Datenloeschung.docx"
                                >
                                    Download
                                </Button>
                            </td>
                        </tr>
                        </tbody>
                    </Table>
                </div>
            </Card>
            <Card>
                <div type="card-header">
                    Personal
                </div>
                <div type="card-body">
                    <Table hover responsive>
                        <tbody>
                        <tr>
                            <td>
                                <img src="https://s3.app-arena.com/patterns/atoms/icons/file-docx.svg" alt="Word document"/>
                            </td>
                            <td>Arbeitszeugnis Azubi</td>
                            <td>Vorlage eines Arbeitszeugnisses für Azubis</td>
                            <td>
                                <Button type="link"
                                        href="https://s3.app-arena.com/brand/documents/Arbeitszeugnis-Azubi.docx"
                                >
                                    Download
                                </Button>
                            </td>
                        </tr>
                        </tbody>
                    </Table>
                </div>
            </Card>
        </div>
    );
}

export default {
    title,
    render
};