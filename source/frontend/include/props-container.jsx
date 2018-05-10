import React from 'react';
import PropTypes from 'prop-types';
import {ReactComponent, Table} from 'apparena-patterns-react';
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
            <tr key={i} className={styles.prop}>
                <th className={'key'}>
                    {key} {prop.required? <small className={styles.isRequired}><i>Required</i></small>: ''}
                </th>
                <td className={'type'}>
                    <code>
                        <span className={styles.type}>{type.name}</span>
                    </code>
                </td>
                <td className={'default'}>
                    {prop.defaultValue &&
                    <span className={styles.defaultValue}>{prop.defaultValue.value}</span>
                    }
                </td>
                <td className="description">
                    {prop.description}
                </td>
                <td>
                    {this.generatePropType(type)}
                </td>
            </tr>
        );
    }

    renderProps(infos) {
        if (infos.props) {
            return (
                <div>
                    <Table bordered hover responsive>
                        <thead>
                        <tr className={styles.prop}>
                            <th className={'key'}>
                                Key
                            </th>
                            <th className={'type'}>
                                Type
                            </th>
                            <th className={'default'}>
                                Default
                            </th>
                            <th className="description">
                                Description
                            </th>
                            <th className="options">
                                Options
                            </th>
                        </tr>
                        </thead>
                        {Object.keys(infos.props).sort().map(::this.renderProp)}
                    </Table>
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
