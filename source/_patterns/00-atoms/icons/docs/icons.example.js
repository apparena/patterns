import React from 'react';
import {Col, Icon, Row} from 'apparena-patterns-react';
import icons from 'apparena-patterns-react/fonts/app-arena-icons.json';

export default function IconsExample() {
    return (
        <Row>
            {icons.map((icon, i) => {
                return (
                    <Col xs="4" key={i} xsVerticalAlignment="center">
                        <Icon name={icon} type="primary"/>
                        <span style={{marginLeft: "20px"}}><b>{icon}</b></span>
                    </Col>
                );
            })}
        </Row>
    );
}