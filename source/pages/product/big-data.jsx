import React from 'react';
import {Card, Row, Col, Button, Tag} from 'apparena-patterns-react';
import styles from './software.scss';
import Markdown from 'react-markdown';

const title = 'BigData';

function render() {
    return [
        <Card key={'1'}>
            <div type="card-header">
                Analytics.js | Main library to integrate to your web-app
            </div>
            <div type="card-body">
                <Row>
                    <Col xs="3">
                        <img alt="thumbnail" src="https://s3.app-arena.com/brand/logos/AA_Logo_bright.svg" className={styles.imgThumbnail}/>
                    </Col>
                    <Col xs="9">

                        <h3>Compile library of 'Analytics.js core' + 'Analytics.js App-Arena Integration'</h3>

                        <p>
                            Analytics.js makes it easy to collect customer data and send it to many different tools using a single, unified API.
                            This libary allows you to build a analytics.js for our customers, which includes the Analytics.js Core and the Integrations.
                        </p>



                        <Button type="outline-primary"
                                href="https://github.com/apparena/analytics.js#readme"
                                className={styles.readMoreButton}
                        >
                            View on Github
                        </Button>
                    </Col>
                </Row>
            </div>
        </Card>,
        <Card key={'4'}>
            <div type="card-header">
                Client-SDK
            </div>
            <div type="card-body">
                <Row>
                    <Col xs="3">
                        <img alt="thumbnail" src="https://s3.app-arena.com/brand/logos/AA_Logo_bright.svg" className={styles.imgThumbnail}/>
                    </Col>
                    <Col xs="9">
                        <Markdown
                            source={`
This libary provides the code to dynamically load customer widgets.
The SDK is always loaded via analytics.js App-Arena Integration.
`}
                        />
                        <Button type="outline-primary"
                                href="https://github.com/apparena/client-sdk#readme"
                                className={styles.readMoreButton}
                        >
                            View on Github
                        </Button>
                    </Col>
                </Row>
            </div>
        </Card>,
        <Card key={'2'}>
            <div type="card-header">
                analytics.js-integration-apparena
            </div>
            <div type="card-body">
                <Row>
                    <Col xs="3">
                        <img alt="thumbnail" src="https://s3.app-arena.com/brand/logos/AA_Logo_bright.svg" className={styles.imgThumbnail}/>
                    </Col>
                    <Col xs="9">
                        <Markdown
                            source={`
AppArena integration for Analytics.js.
Provides the possibility to send Analytics.js Events (track, page, identify, group, screen) to App-Arena Data Cluster.
Also loads the JS-Client-SDK for dynamically loading of customer widgets.
`}
                        />
                        <Button type="outline-primary"
                                href="https://github.com/apparena/analytics.js-integration-apparena#readme"
                                className={styles.readMoreButton}
                        >
                            View on Github
                        </Button>
                    </Col>
                </Row>
            </div>
        </Card>,
        <Card key={'3'}>
            <div type="card-header">
                Analytics.js Core
            </div>
            <div type="card-body">
                <Row>
                    <Col xs="3">
                        <img alt="thumbnail" src="https://www.mattlayman.com/2016/segment.png" className={styles.imgThumbnail}/>
                    </Col>
                    <Col xs="9">
                        <Markdown
                            source={`
This is the core of Analytics.js, the open-source library that powers data collection at Segment.
To build this into a full, usable library, see the Analytics.js repository.
(We at App-Arena uses the full Core of Segments Analytics.js without changes.)
`}
                        />
                        <Button type="outline-primary"
                                href="https://github.com/apparena/analytics.js-core#readme"
                                className={styles.readMoreButton}
                        >
                            View on Github
                        </Button>
                        <Button type="outline-primary"
                                href="https://github.com/segment-integrations"
                                className={styles.readMoreButton}
                        >
                            View integrations
                        </Button>
                    </Col>
                </Row>
            </div>
        </Card>,
        <Card key={'4'}>
            <div type="card-header">
                Serverless Cluster Configuration
                <Tag type="secondary" pill>
                    Private
                </Tag>
            </div>
            <div type="card-body">
                <Row>
                    <Col xs="3">
                        <img alt="thumbnail" src="https://user-images.githubusercontent.com/2752551/30404912-d5781a00-989d-11e7-8d25-5ebca177326a.png" className={styles.imgThumbnail}/>
                    </Col>
                    <Col xs="9">
                        <Markdown
                            source={`
This repo includes all serverless configuration for the Big-Data Cluster hosted on AWS.
`}
                        />
                        <Button type="outline-primary"
                                href="https://bitbucket.org/apparena/serverless-lambda-services"
                                className={styles.readMoreButton}
                        >
                            View on Bitbucket
                        </Button>
                    </Col>
                </Row>
            </div>
        </Card>,
      <Card key={'4'}>
        <div type="card-header">
          Data enrichment service
        </div>
        <div type="card-body">
          <Row>
            <Col xs="3">
              <img alt="thumbnail" src="https://user-images.githubusercontent.com/2752551/30404912-d5781a00-989d-11e7-8d25-5ebca177326a.png" className={styles.imgThumbnail}/>
            </Col>
            <Col xs="9">
              <p>
                A serverless boilerplate to create a data enrichment service.
              </p>
              <Button type="outline-primary"
                      href="https://bitbucket.org/apparena/enrichment-service-boilerplate"
                      className={styles.readMoreButton}
              >
                View on Github
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
};
