import React from 'react';
import {Col, Icon, Row} from 'apparena-patterns-react';
import icons from 'apparena-patterns-react/fonts/app-arena-icons.json';
import styles from './styles.scss';

export default function IconsExample() {
    return (
        <Row>
            {icons.map((icon, i) => {
                return (
                    <Col xs="4" key={i} xsVerticalAlignment="center" className={styles.iconColumn} >
                        <Icon name={icon} size="5x" type="primary"/>
                        <span className={styles.iconDescription}><b>{icon}</b></span>
                    </Col>
                );
            })}
        </Row>
    );
}