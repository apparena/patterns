import React from 'react';
import {Col, Row} from 'apparena-patterns-react';

export default function RowExample() {
    return (
        <Row>
            <Col xs="6">
                <div>This is a part of a row.</div>
            </Col>
            <Col xs="6">
                <div>This is another part of a row.</div>
            </Col>
        </Row>
    );
}