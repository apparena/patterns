import React from 'react';
import {Card, Row, Col, Button} from 'apparena-patterns-react';
import styles from './software.scss';
import Markdown from 'react-markdown';

const surveyWidget = `
You can host your own photo or video contests using the *Multimedia Contest* app. 
`;

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
                        <img alt="thumbnail" src="https://www.app-arena.com/app/uploads/2016/09/Fotowettbewerb_desktop-2-300x203.png" className={styles.imgThumbnail}/>
                    </Col>
                    <Col xs="9">
                        <Markdown
                            source={surveyWidget}
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
        </Card>
    ];
}

export default {
    title,
    render
}