import React from 'react';
import PropTypes from 'prop-types';
import {ReactComponent} from 'apparena-patterns-react';
import styles from './styles.scss';

export default class Props extends ReactComponent {
    static defaultProps = {
        code: PropTypes.string.isRequired,
        children: PropTypes.node.isRequired
    };

    getInitState() {
        return {
            showCode: false
        };
    }

    generatePropType(type) {
        switch (type.name) {
            case 'union':
            case 'enum':
                let values = [];
                if (type.raw) {
                    // flow union
                    values = type.raw.split('|').map((v) => v.trim());
                } else {
                    values = type.value.map((v) => v.value || v.name);
                }
                return (
                    <code className={styles.enum}>
                                <span>
                                    <span className={styles.header}>One of
                                        <span className={styles.brac}>(</span>
                                    </span>
                                    <div style={{paddingLeft: '10px'}}>
                                        {values.map((value, index) => {
                                            return (
                                                <span key={index} className={styles.item}>
                                                    <span className={styles.title}>{typeof value === 'string' && value}</span>
                                                </span>
                                            );
                                        })}
                                    </div>
                                    <span className={styles.footer}>
                                        <span className={styles.brac}>)</span>
                                    </span>
                                </span>
                    </code>
                );
            default:
                return null;
        }
    }

    renderProp(key, i) {
        const {infos} = this.props;
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
                {this.generatePropType(type)}
            </div>
        );
    }

    renderProps(infos) {
        if (infos.props) {
            return (
                <div>
                    {Object.keys(infos.props).map(::this.renderProp)}
                </div>
            );
        }

        return null;
    }

    render() {
        const {infos} = this.props;
        return (
            <div>
                {this.renderProps(infos)}
            </div>
        );
    }
}