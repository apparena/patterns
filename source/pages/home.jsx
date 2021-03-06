import React from 'react';
import { Link } from 'react-router-dom';
import {
  ReactComponent, Container, Col, Row, Button, Icon,
} from '../patterns/index';
import styles from '../css/main.module.scss';

export default class Home extends ReactComponent {
  render() {
    return (
      <div>
        <Container>

          <div className={styles.textCenter}>
            <img src="https://s3.app-arena.com/brand/logos/AA_Logo_bright.svg" role="presentation" width={300} className={styles['my-5']} />
          </div>

          <Row>
            <Col md="4" className={`${styles.textCenter}`}>

              <img height="90" src="https://s3.app-arena.com/brand/logos/AA_Logo_circle_bright.svg" alt="" />

              <h2 className={styles['mt-3']}>Brand</h2>

              <p className={styles.lead}>
                Who are we and how do we look like. Brand related infos and downloads.
              </p>

              <Link to="/brand/AppArenaPersonality">
                <Button type="outline-primary">
                  View Brand section
                </Button>
              </Link>
            </Col>
            <Col md="4" className={`${styles['my-3']} ${styles.textCenter}`}>

              <Icon name="comment-text" size="5x" type="primary" />

              <h2 className={styles['mt-3']}>Communication</h2>

              <p className={styles.lead}>
                How do we communicate with customers. Learn our basic rules.
              </p>

              <Link to="/communication/Personas">
                <Button type="outline-primary">
                  View Communication section
                </Button>
              </Link>
            </Col>
            <Col md="4" className={`${styles['my-3']} ${styles.textCenter}`}>

              <Icon name="box" size="5x" type="primary" />

              <h2 className={styles['mt-3']}>Product</h2>

              <p className={styles.lead}>
                APIs, Code and documentation for all software products
              </p>

              <Link to="/product/Apps">
                <Button type="outline-primary">
                  View Product section
                </Button>
              </Link>
            </Col>
            <Col md="4" className={`${styles['my-3']} ${styles.textCenter}`}>

              <Icon name="code" size="5x" type="primary" />

              <h2 className={styles['mt-3']}>Platform</h2>

              <p className={styles.lead}>
                Learn how to develop Web-Apps and Widgets for App-Arena Platform
              </p>

              <Link to="/platform/WidgetDevelopment">
                <Button type="outline-primary">
                  View Platform Guides
                </Button>
              </Link>
            </Col>
            <Col md="4" className={`${styles['my-3']} ${styles.textCenter}`}>
              <Icon name="atoms-l" size="5x" type="primary" />

              <h2 className={styles['mt-3']}>UI Patterns</h2>

              <p className={styles.lead}>
                Open-Source React JS Pattern collection used in our products
              </p>

              <Link to="/ui-patterns">
                <Button type="outline-primary">
                  View ReactJS UI Patterns
                </Button>
              </Link>
            </Col>
          </Row>
        </Container>

      </div>
    );
  }
}
