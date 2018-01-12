import React from 'react';
import {Card, Row, Col, Button} from 'apparena-patterns-react';
import styles from './software.scss';
import Markdown from 'react-markdown';

const appManagerDescription = `
The *App-Manager* is the central CMS powering all other projects. It is built to be fast and
easy to use by customers and developers alike.
`;

const wizardDescription = `
The *App-Manager Wizard* powers the configuration tools of the App-Manager. It provides numerous
React components that are used to configure all apps, templates and versions that exist in the App-Manager.  
Using Redux it offers a single-page-application experience that enables editing dozens or even hundreds of
configuration values without requiring a page reload.
`;

const mmContestDescription = `
You can host your own photo or video contests using the *Multimedia Contest* app. 
`;

const tippspielDescription = `
Generate leads with this betting game.
`;

const adventCalendarDescription = `
The advent calendar is easily customizable and offers a built-in quiz to make your advent calendar even more interesting.
`;

const surveyWidgetDescription = `
This widget is very easy to embed and offers a small but concise survey embeddable on any website.
`;

const phpSdkDescription = `
Use this SDK to setup the connection to your App-Manager Project.
`;

export const title = 'Software documentation';

export default function SoftwareDocs() {
    return [
        <Card key={"1"}>
            <div type="card-header">
                App-Manager 2.5
            </div>
            <div type="card-body">
                <Row>
                    <Col xs="3">
                        <img src="src/assets/am-thumb.png" className={styles.imgThumbnail}/>
                    </Col>
                    <Col xs="9">
                        <Markdown
                            source={appManagerDescription}
                        />
                        <Button type="outline-primary"
                                href="https://bitbucket.org/apparena/appmanager2.5/src"
                                className={styles.readMoreButton}
                        >
                            Read more
                        </Button>
                    </Col>
                </Row>
            </div>
        </Card>,
        <Card key={"2"}>
            <div type="card-header">
                App-Manager Wizard & Inline editing
            </div>
            <div type="card-body">
                <Row>
                    <Col xs="3">
                        <img src="src/assets/wizard-thumb.png" className={styles.imgThumbnail}/>
                    </Col>
                    <Col xs="9">
                        <Markdown
                            source={wizardDescription}
                        />
                        <Button type="outline-primary"
                                href="https://bitbucket.org/apparena/app-manager-js-lib/src"
                                className={styles.readMoreButton}
                        >
                            Read more
                        </Button>
                    </Col>
                </Row>
            </div>
        </Card>,
        <Card key={"3"}>
            <div type="card-header">
                Multimedia Contest
            </div>
            <div type="card-body">
                <Row>
                    <Col xs="3">
                        <img src="https://www.app-arena.com/app/uploads/2016/09/Fotowettbewerb_desktop-2-300x203.png" className={styles.imgThumbnail}/>
                    </Col>
                    <Col xs="9">
                        <Markdown
                            source={mmContestDescription}
                        />
                        <Button type="outline-primary"
                                href="https://bitbucket.org/apparena/multimedia-contest/src"
                                className={styles.readMoreButton}
                        >
                            Read more
                        </Button>
                    </Col>
                </Row>
            </div>
        </Card>,
        <Card key={"4"}>
            <div type="card-header">
                Tippspiel
            </div>
            <div type="card-body">
                <Row>
                    <Col xs="3">
                        <img src="https://www.app-arena.com/app/uploads/2016/09/EM-Tippspiel_desktop-1-300x203.png" className={styles.imgThumbnail}/>
                    </Col>
                    <Col xs="9">
                        <Markdown
                            source={tippspielDescription}
                        />
                        <Button type="outline-primary"
                                href="https://bitbucket.org/apparena/tippspiel/src"
                                className={styles.readMoreButton}
                        >
                            Read more
                        </Button>
                    </Col>
                </Row>
            </div>
        </Card>,
        <Card key={"5"}>
            <div type="card-header">
                Advent calendar
            </div>
            <div type="card-body">
                <Row>
                    <Col xs="3">
                        <img src="https://www.app-arena.com/app/uploads/2016/09/online-adventskalender-app-arena-desktop-browser.png" className={styles.imgThumbnail}/>
                    </Col>
                    <Col xs="9">
                        <Markdown
                            source={adventCalendarDescription}
                        />
                        <Button type="outline-primary"
                                href="https://bitbucket.org/apparena/advent/src"
                                className={styles.readMoreButton}
                        >
                            Read more
                        </Button>
                    </Col>
                </Row>
            </div>
        </Card>,
        <Card key={"6"}>
            <div type="card-header">
                Survey Widget
            </div>
            <div type="card-body">
                <Row>
                    <Col xs="3">
                        <img src="src/assets/widget.png" className={styles.imgThumbnail}/>
                    </Col>
                    <Col xs="9">
                        <Markdown
                            source={surveyWidgetDescription}
                        />
                        <Button type="outline-primary"
                                href="https://bitbucket.org/apparena/surveywidget/src"
                                className={styles.readMoreButton}
                        >
                            Read more
                        </Button>
                    </Col>
                </Row>
            </div>
        </Card>,
        <Card key={"7"}>
            <div type="card-header">
                PHP-SDK
            </div>
            <div type="card-body">
                <Row>
                    <Col xs="3">
                        <img src="src/assets/logo.png" className={styles.imgThumbnail}/>
                    </Col>
                    <Col xs="9">
                        <Markdown
                            source={phpSdkDescription}
                        />
                        <Button type="outline-primary"
                                href="https://github.com/apparena/php-sdk"
                                className={styles.readMoreButton}
                        >
                            Read more
                        </Button>
                    </Col>
                </Row>
            </div>
        </Card>
    ];
}