import React from "react";
import {Row, Col} from "apparena-patterns-react";

export default function RowExample() {
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

/*;;usage
<RowExample />
;;*/