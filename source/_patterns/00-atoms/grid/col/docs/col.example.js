import React from 'react';
import {Col, Row} from 'apparena-patterns-react';

export default function ColExample() {
    return (
        <Row>
            <Col xs="6" xsVerticalAlignment="center">
                <div>This is a column with width 6.</div>
            </Col>
            <Col xs="6">
                <div>This is another column with width 6.</div>
            </Col>
            <Col xs="3">
                <div>This is a column with width 3.</div>
            </Col>
            <Col xs="3">
                <div>This is a column with width 3 too.</div>
            </Col>
            <Col xs="3">
                <div>This is another column with width 3.</div>
            </Col>
            <Col xs="3">
                <div>This is the last column with width 3.</div>
            </Col>
            <Col xs="3" xsOffset={1}>
                <div>This column has a width of 3 and an offset of 1.</div>
            </Col>
            <Col xs="4">
                <div>This column has a width of 4.</div>
            </Col>
            <Col xs="4">
                <div>This column has a width of 4.</div>
            </Col>
        </Row>
    );
}