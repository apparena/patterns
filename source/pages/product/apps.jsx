import React from 'react';
import {Card, Row, Col, Button} from 'apparena-patterns-react';
import styles from './software.scss';
import Markdown from 'react-markdown';

const title = 'Apps';

function render() {
    return [
        <Card key={"1"}>
            <div type="card-header">
                Multimedia Contest
            </div>
            <div type="card-body">
                <Row>
                    <Col xs="3">
                        <img alt="thumbnail" src="https://www.app-arena.com/app/uploads/2016/09/Fotowettbewerb_desktop-2-300x203.png" className={styles.imgThumbnail}/>
                    </Col>
                    <Col xs="9">
                        <Markdown
                            source={`
You can host your own photo or video contests using the *Multimedia Contest* app.
`}
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
        <Card key={"2"}>
            <div type="card-header">
                Tippspiel
            </div>
            <div type="card-body">
                <Row>
                    <Col xs="3">
                        <img alt="thumbnail" src="https://www.app-arena.com/app/uploads/2016/09/EM-Tippspiel_desktop-1-300x203.png" className={styles.imgThumbnail}/>
                    </Col>
                    <Col xs="9">
                        <Markdown
                            source={`
Betting game for sports. Mainly focused on football worldcup.
`}
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
        <Card key={"3"}>
            <div type="card-header">
                Advent calendar
            </div>
            <div type="card-body">
                <Row>
                    <Col xs="3">
                        <img alt="thumbnail" src="https://www.app-arena.com/app/uploads/2016/09/online-adventskalender-app-arena-desktop-browser.png" className={styles.imgThumbnail}/>
                    </Col>
                    <Col xs="9">
                        <Markdown
                            source={`
The advent calendar is easily customizable and offers a built-in quiz to make your advent calendar even more interesting.
`}
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
    ];
}

export default {
    title,
    render
}