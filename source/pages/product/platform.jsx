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

const phpSdkDescription = `
Use this SDK to setup the connection to your App-Manager Project.
`;

const clientSdkDescription = `
This libary provides the code to dynamically load customer widgets.  
The SDK is always loaded via analytics.js App-Arena Integration.
`;

const componentDocsDescription = `
The App-Arena patterns are a collection of react components built specifically around the App-Arena CI.
`;

const title = 'Platform';

function render() {
    return [
        <Card key={"1"}>
            <div type="card-header">
                App-Manager 2.5
            </div>
            <div type="card-body">
                <Row>
                    <Col xs="3">
                        <img alt="thumbnail" src="assets/am-thumb.png" className={styles.imgThumbnail}/>
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
                        <img alt="thumbnail" src="assets/wizard-thumb.png" className={styles.imgThumbnail}/>
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
                PHP-SDK
            </div>
            <div type="card-body">
                <Row>
                    <Col xs="3">
                        <img alt="thumbnail" src="assets/logo.png" className={styles.imgThumbnail}/>
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
        </Card>,
        <Card key={"4"}>
            <div type="card-header">
                Client-SDK
            </div>
            <div type="card-body">
                <Row>
                    <Col xs="3">
                        <img alt="thumbnail" src="assets/logo.png" className={styles.imgThumbnail}/>
                    </Col>
                    <Col xs="9">
                        <Markdown
                            source={clientSdkDescription}
                        />
                        <Button type="outline-primary"
                                href="https://github.com/apparena/client-sdk#readme"
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
                App-Arena Patterns
            </div>
            <div type="card-body">
                <Row>
                    <Col xs="3">
                        <img alt="thumbnail" src="assets/logo.png" className={styles.imgThumbnail}/>
                    </Col>
                    <Col xs="9">
                        <Markdown
                            source={componentDocsDescription}
                        />
                        <Button type="outline-primary"
                                href="https://github.com/apparena/patterns"
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

export default {
    title,
    render
}