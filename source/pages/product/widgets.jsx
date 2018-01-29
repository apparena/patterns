import React from 'react';
import {Card, Row, Col, Button, Alert} from 'apparena-patterns-react';
import styles from './software.scss';
import Link from 'react-router-dom/es/Link';
import SyntaxHighlighter from 'react-syntax-highlighter/prism';
import {tomorrow} from 'react-syntax-highlighter/styles/prism';

const title = 'Widgets';

function render() {
    return [

        <Alert
            type="info"
        >
            Do you want to create your own widget? Head to our <Link to={'/platform/WidgetDevelopment'}>Platform-Section
            for Widget Development</Link>
        </Alert>,
        <Card key={'1'}>
            <div type="card-header">
                Widgets Technology architecture
            </div>
            <div type="card-body">
                <h4>1. Embed analytics.js</h4>

                <p>
                    <a href="https://github.com/apparena/analytics.js#readme">Analytics.js</a>(Compiled library of
                    slightly customized <a href="https://github.com/apparena/analytics.js-core#readme">Segment.js
                    Analytics core</a>
                    and <a href="https://github.com/apparena/analytics.js-integration-apparena#readme">Analytics.js
                    App-Arena
                    Integration</a> built with browserify) is embedded via script tag into the customers website:
                </p>

                <SyntaxHighlighter
                    language={'html'}
                    style={tomorrow}
                    showLineNumbers
                >
                    {`<script src='https://cdn.app-arena.com/companies/1/channels/7065/sdk.js' async></script>`}
                </SyntaxHighlighter>

                <Alert type="info">
                    Company Id (in the above example "1") and Channel Id (in the above example "7065") need to be
                    replaced using corresponding values.
                </Alert>

                <h4>2. Analytics.js loads Widget Controller (Client SDK)</h4>

                <p>
                    On each page load of the website the analytics.js lib will load `shim.js` asynchronously which will
                    build an iframe and load the `frame.js`script within the iframe-scope.
                    Both files are part of the <a href="https://github.com/apparena/client-sdk#readme">Client-SDK</a>
                    and are <strong>responsible for controlling and generating Widget delivery to the website</strong>.
                </p>

                <h4>3. frame.js requests Customer Widgets by calling the App-Arena Platform API</h4>

                <p>
                    The `frame.js`will request the App-Arena Platform API for activated widgets on Channel '7065'
                    (Channel Id is passed via embed Url in Step 1). The JSON response looks like this:
                </p>

                <SyntaxHighlighter
                    language={'json'}
                    style={tomorrow}
                    showLineNumbers
                >
                    {`[
    {
        'channelId': 7065,
        'appId': 21977,
        'type': 'widget',
        'source': 'https://cdn.app-arena.com/companies/1/apps/21977/widget.dc0df0.js',
        'settings': {
            'position': 'top right',
            'timeout': 1000
        },
        'rules': {}
    },
    ... // Next widget
]`}
                </SyntaxHighlighter>

                <h4>4. frame.js will load widget files and create them on Website</h4>

                <p>
                    As each widget is represented by a <strong>customly build Widget JS file</strong> (all customer
                    configuration is build into that file. So each time a customer will change the configuration of the
                    widget the file has be recompiled and uploaded to S3), the `frame.js`lib will load these files and
                    build the widget corresponding the the settings and rules defined for the widget.
                </p>

                <h2>Sequence diagram</h2>
                <img src="/assets/widget-architecture.png" className={styles['img-fluid']}/>
            </div>
        </Card>,
        <Card key={'1'}>
            <div type="card-header">
                Widget Generator
            </div>
            <div type="card-body">
                <Row>
                    <Col xs="3">
                        <img alt="thumbnail" src="https://upload.wikimedia.org/wikipedia/en/thumb/e/e3/Yeoman.svg/543px-Yeoman.svg.png" className={styles.imgThumbnail}/>
                    </Col>
                    <Col xs="9">
                        <p>
                            Use this <strong>Yeoman generator</strong> to create new widgets within minutes.
                        </p>

                        <Button type="outline-primary"
                                href="https://github.com/apparena/apparena-widget-generator"
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
                Survey Widget
            </div>
            <div type="card-body">
                <Row>
                    <Col xs="3">
                        <img alt="thumbnail" src="/assets/widget.png" className={styles.imgThumbnail}/>
                    </Col>
                    <Col xs="9">
                        <p>
                            This widget is very easy to embed and offers a small but concise survey embeddable on any
                            website.
                        </p>
                        <Button type="outline-primary"
                                href="https://bitbucket.org/apparena/surveywidget/src"
                                className={styles.readMoreButton}
                        >
                            View on Bitbucket
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