import React from 'react';
import {Col, Row} from 'apparena-patterns-react';

export default function ColExample() {
    return (
        <Row>
            <Col xs="2" xsOrder={10}>
                <span>I'm number 10!</span>
            </Col>
            <Col xs="2" xsVerticalAlignment="center">
                <span>I am in the vertical center</span>
            </Col>
            <Col xs="2" lgHidden>
                <span>I am hidden on large devices</span>
            </Col>
            <Col xs="2" xsOffset={1}>
                <span>I have a little offset</span>
            </Col>
        </Row>
    );
}