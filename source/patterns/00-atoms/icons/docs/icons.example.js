import React from 'react';
import { Col, Icon, Row } from 'apparena-patterns-react';
import styles from './styles.scss';

export default function IconsExample() {
  // Get the icons from the asset map
  const url = 'https://aa-fonts.s3.amazonaws.com/app-arena/app-arena.json';

  fetch(url)
    .then(res => res.json())
    .then((icons) => {
      console.log('Checkout this JSON! ', icons);
      return (
        <div>
          Checkout our <a href="https://aa-fonts.s3.amazonaws.com/app-arena/app-arena.html">App-Arena Font</a>.
          <Row>
            {icons.map((icon, i) => (
              <Col xs="4" key={i} xsVerticalAlignment="center" className={styles.iconColumn} >
                <Icon name={icon} size="5x" type="primary" />
                <span className={styles.iconDescription}><b>{icon}</b></span>
              </Col>
            ))}
          </Row>
        </div>

      );
    })
    .catch((err) => { throw err; });
}
