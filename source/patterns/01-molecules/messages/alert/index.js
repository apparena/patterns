import React from 'react';
import PropTypes from 'prop-types';
import ReactComponent from '../../../react-utils/component';
import cx from 'classnames';
import styles from './index.scss';

const ALERT_TYPES = [
    'danger',
    'info',
    'success',
    'warning'
];

export default class Alert extends ReactComponent {
    static propTypes = {
        children: PropTypes.element.isRequired,
        type: PropTypes.oneOf(ALERT_TYPES).isRequired,
        classNames: PropTypes.string,
        dismissible: PropTypes.bool
    };

    static defaultProps = {
        dismissible: false,
        classNames: ''
    };

    renderButton() {
        if (this.props.dismissible) {
            return (
                <button type="button" className={styles.close}>
                    <span>&times;</span>
                </button>
            );
        }
    }

    render() {
        const classes = cx(
            styles.alert,
            styles[`alert-${this.props.type}`],
            this.props.classNames
        );

        return (
            <div className={classes}>
                {this.props.children}
                {this.renderButton()}
            </div>
        );
    }
}