import React from 'react';
import {Card, Row, Col, Button} from 'apparena-patterns-react';
import styles from './brand.scss';

const title = 'Logos';

function render() {
    const head = document.getElementsByTagName('head')[0];
    const alreadyInserted = Array.from(head.children).filter((child) => {
        return child.id === 'aa-css';
    }).length;

    if (!alreadyInserted) {
        const link = document.createElement('link');
        link.id = 'aa-css';
        link.rel = 'stylesheet';
        link.type = 'text/css';
        link.href = '/dist/styles/corporate-identity.css';
        head.appendChild(link);
    }

    return (
        <Card>
            <div type="card-header">
                Logos
            </div>
            <div type="card-body">
                <Row>
                    <Col xs="3">
                        <img alt="thumbnail" src="/assets/logo.svg"/>
                    </Col>
                    <Col xs="9">
                        <p>
                            SVG Logo - bright background
                        </p>
                        <Button type="outline-primary"
                                href="/assets/logo.svg"
                                className={styles.readMoreButton}
                        >
                            Download
                        </Button>
                    </Col>
                </Row>
            </div>
        </Card>
    );
}

export default {
    title,
    render
}