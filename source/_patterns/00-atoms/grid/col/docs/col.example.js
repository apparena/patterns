import React from "react";
import {Col, Row} from "apparena-patterns-react";

export default function ColExample() {
    return (
        <Row>
            <Col xsVerticalAlignment="center">
                This is a part of a row.
            </Col>
            <Col>
                This is another part of a row.
            </Col>
        </Row>
    );
}