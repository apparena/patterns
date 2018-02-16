import React from 'react';
import {Button, Card, Table} from 'apparena-patterns-react';

const title = 'Presentations';

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
                    Allgemeine Präsentationen
                </div>
                <div type="card-body">
                    <Table hover responsive>
                        <tbody>
                        <tr>
                            <td>
                                <img src="https://s3.app-arena.com/patterns/atoms/icons/file-ppt.svg" alt="Powerpoint presentation"/>
                            </td>
                            <td>App-Arena Vorstellung</td>
                            <td>Unternehmenspräsentation</td>
                            <td>
                                <Button type="link"
                                        href="https://s3.app-arena.com/brand/presentations/Praesentation-App-Arena.pptx"
                                >
                                    Download
                                </Button>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <img src="https://s3.app-arena.com/patterns/atoms/icons/file-ppt.svg" alt="Powerpoint presentation"/>
                            </td>
                            <td>Produkt- und Leistungsportfolio</td>
                            <td>Allgemeine Präsentation mit Fokus auf Produkte- und Leistungen der App-Arena GmbH</td>
                            <td>
                                <Button type="link"
                                        href="https://s3.app-arena.com/brand/presentations/Praesentation-App-Arena-Produkte-Leistungen.pptx"
                                >
                                    Download
                                </Button>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <img src="https://s3.app-arena.com/patterns/atoms/icons/file-ppt.svg" alt="Powerpoint presentation"/>
                            </td>
                            <td>Reseller</td>
                            <td>Reseller-Stores, Vorteile für Reseller, Vertragsgestaltung, ...</td>
                            <td>
                                <Button type="link"
                                        href="https://s3.app-arena.com/brand/presentations/Praesentation-Reseller.pptx"
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
                    Produkt Präsentationen
                </div>
                <div type="card-body">
                    <Table hover responsive>
                        <tbody>
                        <tr>
                            <td>
                                <img src="https://s3.app-arena.com/patterns/atoms/icons/file-ppt.svg" alt="Powerpoint presentation"/>
                            </td>
                            <td>Präsentation Tippspiel</td>
                            <td>WM-Tippspiel, EM-Tippspiel, Bundesliga-Tippspiel, weitere Tippspiele</td>
                            <td>
                                <Button type="link"
                                        href="https://s3.app-arena.com/brand/presentations/Praesentation-Tippspiel.pptx"
                                >
                                    Download
                                </Button>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <img src="https://s3.app-arena.com/patterns/atoms/icons/file-ppt.svg" alt="Powerpoint presentation"/>
                            </td>
                            <td>Präsentation Foto-/Videowettbewerb</td>
                            <td>Fotowettbewerb, Videowettbewerb, Vereinsvoting, Multimedia-Wettbewerb</td>
                            <td>
                                <Button type="link"
                                        href="https://s3.app-arena.com/brand/presentations/Praesentation-Voting.pptx"
                                >
                                    Download
                                </Button>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <img src="https://s3.app-arena.com/patterns/atoms/icons/file-ppt.svg" alt="Powerpoint presentation"/>
                            </td>
                            <td>Adventskalender</td>
                            <td>Adventskalender, Osterkalender, Ostersuchspiel, Quiz, Gewinnspiel</td>
                            <td>
                                <Button type="link"
                                        href="https://s3.app-arena.com/brand/presentations/Praesentation-Adventskalender.pptx"
                                >
                                    Download
                                </Button>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <img src="https://s3.app-arena.com/patterns/atoms/icons/file-ppt.svg" alt="Powerpoint presentation"/>
                            </td>
                            <td>Quiz</td>
                            <td>Quiz-App, Umfrage</td>
                            <td>
                                <Button type="link"
                                        href="https://s3.app-arena.com/brand/presentations/Praesentation-Quiz.pptx"
                                >
                                    Download
                                </Button>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <img src="https://s3.app-arena.com/patterns/atoms/icons/file-ppt.svg" alt="Powerpoint presentation"/>
                            </td>
                            <td>Pairs</td>
                            <td>Pairs</td>
                            <td>
                                <Button type="link"
                                        href="https://s3.app-arena.com/brand/presentations/Praesentation-Pairs.pptx"
                                >
                                    Download
                                </Button>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <img src="https://s3.app-arena.com/patterns/atoms/icons/file-ppt.svg" alt="Powerpoint presentation"/>
                            </td>
                            <td>Sparty</td>
                            <td>Sparty, VR-Party, Abi-Voting</td>
                            <td>
                                <Button type="link"
                                        href="https://s3.app-arena.com/brand/presentations/Praesentation-Sparty.pptx"
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
}