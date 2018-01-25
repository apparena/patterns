import React from 'react';
import {Card, Col, Row, Table} from 'apparena-patterns-react';
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
                    <Row>
                        <Col xs="3">
                            <img alt="thumbnail" src="https://randomuser.me/api/portraits/women/83.jpg" className={styles.imgThumbnail}/>
                        </Col>
                        <Col xs="9">
                            <blockquote className="blockquote">
                                <h4 className="mb-0">"I want to be a successful project manager. I'm happy to show my success to my boss and gain recognition!"</h4>
                            </blockquote>
                        </Col>
                    </Row>

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
            </Card>,
            <Card>
                <div type="card-header">
                    Technik Tom
                </div>
                <div type="card-body">
                    <Row>
                        <Col xs="3">
                            <img alt="thumbnail" src="https://randomuser.me/api/portraits/men/79.jpg" className={styles.imgThumbnail}/>
                        </Col>
                        <Col xs="9">
                            <blockquote className="{styles.blockquote}">
                                <h4 className="mb-0">"??????????????????"</h4>
                            </blockquote>
                        </Col>
                    </Row>

                    <Table hover responsive>
                        <tbody>
                        <tr>
                            <th>Position</th>
                            <td>
                                Angestellter im Online-Marketing
                            </td>
                        </tr>
                        <tr>
                            <th>Ziele / Intention</th>
                            <td>
                                <p>
                                    Leadgenerierung, Sponsoren einbinden - Geld verdienen, Imagestärkung, Unterhaltung Kunden und Mitarbeiter
                                </p>
                            </td>
                        </tr>
                        <tr>
                            <th>Nutzen</th>
                            <td>
                                <p>
                                    -
                                </p>
                            </td>
                        </tr>
                        <tr>
                            <th>Erfahrung mit Einrichtung Web-Apps</th>
                            <td>
                                <p>
                                    Erfahren - geringe Hilfe notwendig.
                                </p>
                            </td>
                        </tr>
                        <tr>
                            <th>Erfahrung im Online Marketing</th>
                            <td>
                                <p>
                                    Erfahren - oft eigene Abteilung im Unternehmen.
                                </p>
                            </td>
                        </tr>
                        <tr>
                            <th>Wünsche</th>
                            <td>
                                <p>
                                    Whitelabeling, Reibungsloser Ablauf und keine Nachkundenakquise, mehr technische Informationen gewünscht
                                </p>
                            </td>
                        </tr>
                        <tr>
                            <th>Ängste</th>
                            <td>
                                <p>
                                    Datenschutz
                                </p>
                            </td>
                        </tr>
                        </tbody>
                    </Table>
                </div>
            </Card>,
            <Card>
                <div type="card-header">
                    Technik Tom
                </div>
                <div type="card-body">
                    <Row>
                        <Col xs="3">
                            <img alt="thumbnail" src="https://randomuser.me/api/portraits/men/64.jpg" className={styles.imgThumbnail}/>
                        </Col>
                        <Col xs="9">
                            <blockquote className="{styles.blockquote}">
                                <h4 className="mb-0">"??????????????????"</h4>
                            </blockquote>
                        </Col>
                    </Row>

                    <Table hover responsive>
                        <tbody>
                        <tr>
                            <th>Position</th>
                            <td>
                                Leitender Angestelter
                            </td>
                        </tr>
                        <tr>
                            <th>Ziele / Intention</th>
                            <td>
                                <p>
                                    Integration der Produkte in das Backend-System unter ihrem Namen.
                                </p>
                            </td>
                        </tr>
                        <tr>
                            <th>Nutzen</th>
                            <td>
                                <p>
                                    Verwaltung von Leads Ihrer Kunden. Interesse, dass Kunden größere Leadlisten generieren.
                                </p>
                            </td>
                        </tr>
                        <tr>
                            <th>Erfahrung mit Einrichtung Web-Apps</th>
                            <td>
                                <p>
                                    Sehr großes Know-How. Die eigenen Kunden bekommen Support von Ihnen. App-Arena ist nur Second-Level Support.
                                </p>
                            </td>
                        </tr>
                        <tr>
                            <th>Erfahrung im Online Marketing</th>
                            <td>
                                <p>
                                    Sehr großes Know-How. Online Marketing Dienstleistungen werden selbst angeboten.
                                </p>
                            </td>
                        </tr>
                        <tr>
                            <th>Wünsche</th>
                            <td>
                                <p>
                                    Kennen die Produkte der App-Arena bereits und wünschen detailliertere Informationen zum Whitelabeling
                                </p>
                            </td>
                        </tr>
                        <tr>
                            <th>Ängste</th>
                            <td>
                                <p>
                                    Datenschutz
                                </p>
                            </td>
                        </tr>
                        </tbody>
                    </Table>
                </div>
            </Card>,
            <Card>
                <div type="card-header">
                    Full-Service Sophie
                </div>
                <div type="card-body">
                    <Row>
                        <Col xs="3">
                            <img alt="thumbnail" src="https://randomuser.me/api/portraits/women/64.jpg" className={styles.imgThumbnail}/>
                        </Col>
                        <Col xs="9">
                            <blockquote className="{styles.blockquote}">
                                <h4 className="mb-0">"??????????????????"</h4>
                            </blockquote>
                        </Col>
                    </Row>

                    <Table hover responsive>
                        <tbody>
                        <tr>
                            <th>Position</th>
                            <td>
                                Leiterin des Marketings
                            </td>
                        </tr>
                        <tr>
                            <th>Ziele / Intention</th>
                            <td>
                                <p>
                                    Entwicklung eines neuen Konzeptes für den Online-Auftritt durch Workshops & Beratung.
                                    Fokus auf Formen der Leadgenerierung und der Online-Marketing Instrumente
                                </p>
                            </td>
                        </tr>
                        <tr>
                            <th>Nutzen</th>
                            <td>
                                <p>
                                    Professioneller Online Auftritt - Imagestärkung, Kundengewinnung
                                </p>
                            </td>
                        </tr>
                        <tr>
                            <th>Erfahrung mit Einrichtung Web-Apps</th>
                            <td>
                                <p>
                                    -
                                </p>
                            </td>
                        </tr>
                        <tr>
                            <th>Erfahrung im Online Marketing</th>
                            <td>
                                <p>
                                    -
                                </p>
                            </td>
                        </tr>
                        <tr>
                            <th>Wünsche</th>
                            <td>
                                <p>
                                    Individuelle Betreuung
                                </p>
                            </td>
                        </tr>
                        <tr>
                            <th>Ängste</th>
                            <td>
                                <p>
                                    Datenschutz, zu starke Abhängigkeit, generell Shitstorm, Kontrollverlust der Situation,
                                    Unternehmensphilosophie wird nicht berücksichtigt
                                </p>
                            </td>
                        </tr>
                        </tbody>
                    </Table>
                </div>
            </Card>,
            <Card>
                <div type="card-header">
                    Agency Anny
                </div>
                <div type="card-body">
                    <Row>
                        <Col xs="3">
                            <img alt="thumbnail" src="https://randomuser.me/api/portraits/women/3.jpg" className={styles.imgThumbnail}/>
                        </Col>
                        <Col xs="9">
                            <blockquote className="{styles.blockquote}">
                                <h4 className="mb-0">"??????????????????"</h4>
                            </blockquote>
                        </Col>
                    </Row>

                    <Table hover responsive>
                        <tbody>
                        <tr>
                            <th>Position</th>
                            <td>
                                Angestellte einer Marketing-Agentur
                            </td>
                        </tr>
                        <tr>
                            <th>Ziele / Intention</th>
                            <td>
                                <p>
                                    Vorgegebenes Ziel der Kunden -> Passendes Angebot fpr diese Kunden finden
                                </p>
                            </td>
                        </tr>
                        <tr>
                            <th>Nutzen</th>
                            <td>
                                <p>
                                    Kundenzufriedenheit, Gewinn erzielen
                                </p>
                            </td>
                        </tr>
                        <tr>
                            <th>Erfahrung mit Einrichtung Web-Apps</th>
                            <td>
                                <p>
                                    Gering. Technische Unterstützung durch App-Arena benötigt
                                </p>
                            </td>
                        </tr>
                        <tr>
                            <th>Erfahrung im Online Marketing</th>
                            <td>
                                <p>
                                    Hoch
                                </p>
                            </td>
                        </tr>
                        <tr>
                            <th>Wünsche</th>
                            <td>
                                <p>
                                    Individuelle Beratung
                                </p>
                            </td>
                        </tr>
                        <tr>
                            <th>Ängste</th>
                            <td>
                                <p>
                                    Unzufriedene Kunden -> Verlust
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