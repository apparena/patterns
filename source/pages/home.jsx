import React from 'react';
import {ReactComponent, Container, Col, Row, Button} from '../patterns';
import {Link} from 'react-router-dom';
import styles from './home.scss';

export default class Home extends ReactComponent {


    render() {
        return (
            <div>
                <Container className={styles['my-3']}>
                    <img src="assets/logo.png" role="presentation" width={200}/>
                    <h1>App-Arena Brand Guidelines</h1>

                    <Row>
                        <Col md={6} className={styles['my-3']}>
                            <h2>Brand</h2>
                            <p>
                                Read about App-Arena.com
                                <ul>
                                    <li>Personality</li>
                                    <li>Colors</li>
                                    <li>Documents</li>
                                    <li>Icons</li>
                                    <li>Logos</li>
                                    <li>Presentations</li>
                                    <li>Typography</li>
                                </ul>
                            </p>

                            <Link to={`/brand/P01Personality`}>
                                <Button type="outline-primary">
                                    View Brand section
                                </Button>
                            </Link>
                        </Col>
                        <Col md={6} className={styles['my-3']}>
                            <h2>Communication</h2>
                            <p>
                                <ul>
                                    <li>Blog & Newsletter</li>
                                    <li>Personas</li>
                                    <li>Storytelling</li>
                                    <li>Video production</li>
                                    <li>Writing Style</li>
                                </ul>
                            </p>

                            <Link to={`/communication/Personas`}>
                                <Button type="outline-primary">
                                    View Communication section
                                </Button>
                            </Link>
                        </Col>
                        <Col md={6} className={styles['my-3']}>
                            <h2>Product</h2>
                            <p>
                                <ul>
                                    <li>Apps</li>
                                    <li>BigData</li>
                                    <li>Platform & SDKs</li>
                                    <li>Widgets</li>
                                </ul>
                            </p>

                            <Link to={`/product/Apps`}>
                                <Button type="outline-primary">
                                    View Product section
                                </Button>
                            </Link>
                        </Col>
                        <Col md={6} className={styles['my-3']}>
                            <h2>UI Patterns</h2>

                            <Link to={`/ui-patterns`}>
                                <Button type="outline-primary">
                                    View ReactJS UI Patterns
                                </Button>
                            </Link>
                        </Col>
                    </Row>
                </Container>

            </div>
        );
    }


}
