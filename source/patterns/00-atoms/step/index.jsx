/* eslint camelcase: 0 */
import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import {
  Button, Col, Icon, Row,
} from '../../index';
import styles from './index.module.scss';

function Step({
  children, active, done, title, topic, btnText, onClick, btnTextDone,
}) {
  return (
    <Row className={cx(styles.step, active && styles.active, done && styles.done)}>
      <Col xs="12">
        <div className={styles.container}>
          <Row>
            <Col xs="12">
              <div className={styles.header}>
                <div>
                  <div className={styles.icon}>
                      {done ? <Icon name="check" /> : <Icon name="circle" />}
                    </div>
                  <div className={styles.topic}>
                      {topic}
                    </div>
                </div>
                <div className={styles.title}>
                  <h5>{title}</h5>
                </div>
                <div className={styles.button}>
                  <Button
                      size="sm"
                      type={active ? 'outline-secondary' : 'outline-primary'}
                      onClick={onClick}
                    >
                      {active ? btnTextDone : btnText}
                    </Button>
                </div>
              </div>
            </Col>
          </Row>
          <Row>
            <Col xs="12">
              <div className={styles.body}>
                {children}
              </div>
            </Col>
          </Row>
        </div>
      </Col>
    </Row>
  );
}

Step.propTypes = {
  /**
     * Elements to be displayed in the Step Component
     */
  children: PropTypes.node.isRequired,
  /**
     * Set whether to display the Step Content
     */
  active: PropTypes.bool.isRequired,
  /**
     * Set whether the Step is finished
     */
  done: PropTypes.bool.isRequired,
  /**
     * The topic of this Step
     */
  topic: PropTypes.string.isRequired,
  /**
     * The title of this Step
     */
  title: PropTypes.string.isRequired,
  /**
     * The Text of the Button of this Step
     */
  btnText: PropTypes.string.isRequired,
  /**
     * The Text of the Button of this Step if active
     */
  btnTextDone: PropTypes.string.isRequired,
  /**
     * Function called when the Step Button is clicked.
     */
  onClick: PropTypes.func.isRequired,
};

export default Step;
