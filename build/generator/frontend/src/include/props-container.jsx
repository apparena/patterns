import React, {PropTypes} from 'react';
import {ReactComponent} from 'apparena-patterns-react';
import styles from './styles.scss';

export default class Example extends ReactComponent {
    static defaultProps = {
        code: PropTypes.string.isRequired,
        children: PropTypes.node.isRequired
    };

    getInitState() {
        return {
            showCode: false
        };
    }

    renderProps(infos) {
        return (
            <div>
                {Object.keys(infos.props).map((key, i) => {
                    const prop = infos.props[key];
                    let type = prop.type;
                    if (!type) {
                        return null;
                    }
                    if (type.type) {
                        type = type.type;
                    }
                    return (
                        <div key={i} className={styles.prop}>
                            <h3 className={styles.header}>
                                <code>
                                    <span className={styles.type}>{type.name}</span>
                                    {key}
                                    {prop.defaultValue &&
                                    <span className={styles.defaultValue}> = {prop.defaultValue.value}</span>
                                    }
                                </code>
                            </h3>
                            <div className={styles.description}>{prop.description}</div>
                            {type.value &&
                            <code className={styles.enum}>
                                <span>
                                    <span className={styles.header}>One of
                                        <span className={styles.brac}>(</span>
                                    </span>
                                    <div style={{paddingLeft: '10px'}}>
                                        {Object.keys(type.value).map((vKey, index) => {
                                            return (
                                                <span key={index} className={styles.item}>
                                                    <span className={styles.title}>{typeof type.value[vKey].value === 'string' && type.value[vKey].value}</span>
                                                </span>
                                            );
                                        })}
                                    </div>
                                    <span className={styles.footer}>
                                        <span className={styles.brac}>)</span>
                                    </span>
                                </span>
                            </code>
                            }
                        </div>
                    );
                })}
            </div>
        );
    }

    render() {
        const {infos} = this.props;
        return (
            <div>
                <h3>Props</h3>
                {this.renderProps(infos)}
            </div>
        );
    }
}