import React from 'react';
import {Col, Icon, Row} from 'apparena-patterns-react';
import styles from './styles.scss';

export default function IconsExample() {

    return (
        <div>
           Checkout our <a href="https://aa-fonts.s3.amazonaws.com/app-arena/app-arena.html">App-Arena Font</a>.
        </div>
        /*<Row>
            {icons.map((icon, i) => {
                return (
                    <Col xs="4" key={i} xsVerticalAlignment="center" className={styles.iconColumn} >
                        <Icon name={icon} size="5x" type="primary"/>
                        <span className={styles.iconDescription}><b>{icon}</b></span>
                    </Col>
                );
            })}
        </Row>*/
    );
}