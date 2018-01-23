import React from 'react';
import {Card, Row, Col, Button} from 'apparena-patterns-react';
import styles from './software.scss';
import Markdown from 'react-markdown';

const title = 'Widgets';

function render() {
    return [
        <div>
            <Card key={"1"}>
                <div type="card-header">
                    Widget Generator
                </div>
                <div type="card-body">
                    <Row>
                        <Col xs="3">
                            <img alt="thumbnail" src="https://upload.wikimedia.org/wikipedia/en/thumb/e/e3/Yeoman.svg/543px-Yeoman.svg.png" className={styles.imgThumbnail}/>
                        </Col>
                        <Col xs="9">
                            <Markdown
                                source={`
Use this **Yeoman generator** to create new widgets within minutes.
`}
                            />
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
            <Card key={"2"}>
                <div type="card-header">
                    Survey Widget
                </div>
                <div type="card-body">
                    <Row>
                        <Col xs="3">
                            <img alt="thumbnail" src="/assets/widget.png" className={styles.imgThumbnail}/>
                        </Col>
                        <Col xs="9">
                            <Markdown
                                source={`
This widget is very easy to embed and offers a small but concise survey embeddable on any website.
`}
                            />
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
        </div>
    ];
}

export default {
    title,
    render
}