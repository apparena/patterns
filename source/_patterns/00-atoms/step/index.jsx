/* eslint camelcase: 0 */
import React from 'react';
import PropTypes from 'prop-types';
import {Button, Col, Icon, Row} from 'apparena-patterns-react';
import styles from './index.scss';
import cx from 'classnames';

function Step({children, active, done, title, topic, btnText, onClick, btnTextDone}) {
    return (
        <Row className={cx(styles.step, active && styles.active, done && styles.done)}>
            <Col xs="12">
                <div className={styles.container}>
                    <Row>
                        <Col xs="12">
                            <div className={styles.header}>
                                <div>
                                    <div className={styles.icon}>
                                        {done ? <Icon name="check"/> : <Icon name="circle"/>}
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
    children: PropTypes.node.isRequired,
    active: PropTypes.bool.isRequired,
    done: PropTypes.bool.isRequired,
    topic: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    btnText: PropTypes.string.isRequired,
    btnTextDone: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired
};

export default Step;