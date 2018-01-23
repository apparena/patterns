import React from 'react';
import {Card, Row, Col, Button} from 'apparena-patterns-react';
import styles from './software.scss';
import Markdown from 'react-markdown';


const title = 'Widgets';

function render() {
    return [
        <Card key={"1"}>
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