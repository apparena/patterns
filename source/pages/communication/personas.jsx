import React from 'react';
import {Card, Col, Table} from 'apparena-patterns-react';
import styles from './communication.scss';

const title = 'Personas';

function render() {

    return (
        <div>
            <Card>
                <div type="card-header">
                    Online-Marketing Mary
                </div>
                <div type="card-body">
                    <Col xs="3">
                        <img alt="thumbnail" src="https://randomuser.me/api/portraits/women/83.jpg" className={styles.imgThumbnail}/>
                    </Col>
                    <Col xs="9">
                        I want to be a successful project manager. I'm happy to show my success to my boss and gain recognition.!
                    </Col>

                    <Table hover responsive>
                        <tbody>
                        <tr>
                            <th>Position</th>
                            <td>
                                Angestellte im Online-Marketing
                            </td>
                        </tr>
                        <tr>
                            <th>Ziele / Intention</th>
                            <td>
                                <p>
                                    Reichweite generieren. Image verbessern. Kundengewinnung. Kundebindung. Unterhaltung
                                </p>
                            </td>
                        </tr>
                        <tr>
                            <th>Nutzen</th>
                            <td>
                                <p>
                                    Mehr bzw. regelmäßiger Content. Mehr Fans auf Facebook gewinnen. (Transparentes Controlling/Erfolgszahlen)
                                </p>
                            </td>
                        </tr>
                        <tr>
                            <th>Erfahrung mit Einrichtung Web-Apps</th>
                            <td>
                                <p>
                                    Kein --> Support sehr wichtig.
                                </p>
                            </td>
                        </tr>
                        <tr>
                            <th>Erfahrung im Online Marketing</th>
                            <td>
                                <p>
                                    Gering
                                </p>
                            </td>
                        </tr>
                        <tr>
                            <th>Wünsche</th>
                            <td>
                                <p>
                                    Support im Tarif mit enthalten. Test-Version ansehen können.
                                </p>
                            </td>
                        </tr>
                        <tr>
                            <th>Ängste</th>
                            <td>
                                <p>
                                    Versteckte Kosten, Technische Probleme, <strong>Chef unzufrieden</strong>

                                </p>
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