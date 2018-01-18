import React from 'react';
import {Card, Row, Col, Button} from 'apparena-patterns-react';
import styles from './software.scss';
import Markdown from 'react-markdown';

const analyticsjsDescription = `
Analytics.js makes it easy to collect customer data and send it to many different tools using a single, unified API.</br>
This libary allows you to build a analytics.js for our customers, which includes the Analytics.js Core and the Integrations.
`;

const analyticsIntegrationDescription = `
AppArena integration for Analytics.js.</br>
Provides the possibility to send Analytics.js Events (track, page, identify, group, screen) to App-Arena Data Cluster.</br>
Also loads the JS-Client-SDK for dynamically loading of customer widgets.
`;

const analyticsCoreDescription = `
This is the core of Analytics.js, the open-source library that powers data collection at Segment.</br>
To build this into a full, usable library, see the Analytics.js repository.</br>
(We at App-Arena uses the full Core of Segments Analytics.js without changes.)
`;

const clusterCoreDescription = `
This repo includes all serverless configuration for the Big-Data Cluster hosted on AWS.
`;

export const title = 'Analytics';

export default function AnalyticsDocs() {
    return [
        <Card key={"1"}>
            <div type="card-header">
                Analytics.js
            </div>
            <div type="card-body">
                <Row>
                    <Col xs="3">
                        <img src="src/assets/logo.png" className={styles.imgThumbnail}/>
                    </Col>
                    <Col xs="9">
                        <Markdown
                            source={analyticsjsDescription}
                        />
                        <Button type="outline-primary"
                                href="https://github.com/apparena/analytics.js#readme"
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
                analytics.js-integration-apparena
            </div>
            <div type="card-body">
                <Row>
                    <Col xs="3">
                        <img src="src/assets/logo.png" className={styles.imgThumbnail}/>
                    </Col>
                    <Col xs="9">
                        <Markdown
                            source={analyticsIntegrationDescription}
                        />
                        <Button type="outline-primary"
                                href="https://github.com/apparena/analytics.js-integration-apparena#readme"
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
                Analytics.js Core
            </div>
            <div type="card-body">
                <Row>
                    <Col xs="3">
                        <img src="src/assets/logo.png" className={styles.imgThumbnail}/>
                    </Col>
                    <Col xs="9">
                        <Markdown
                            source={analyticsCoreDescription}
                        />
                        <Button type="outline-primary"
                                href="https://github.com/apparena/analytics.js-core#readme"
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
                Serverless Cluster Configuration
            </div>
            <div type="card-body">
                <Row>
                    <Col xs="3">
                        <img src="src/assets/logo.png" className={styles.imgThumbnail}/>
                    </Col>
                    <Col xs="9">
                        <Markdown
                            source={clusterCoreDescription}
                        />
                        <Button type="outline-primary"
                                href="https://bitbucket.org/apparena/serverless-lambda-services"
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