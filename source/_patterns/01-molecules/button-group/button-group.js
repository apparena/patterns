import React from 'react';
import PropTypes from 'prop-types';
import ReactComponent from '../../react-utils/component';
import styles from './button-group.scss';

export default class ButtonGroup extends ReactComponent {
    static propTypes = {
        /**
         * Button(s) that should be rendered inside of the group
         */
        children: PropTypes.node.isRequired
    };

    render() {
        return (
            <div className={styles.btnGroup} role="group">
                {this.props.children}
            </div>
        );
    }
}