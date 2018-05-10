import React from 'react';
import PropTypes from 'prop-types';
import ReactComponent from '../../react-utils/component/index';
import styles from './index.scss';

export default class ButtonGroup extends ReactComponent {
    static propTypes = {
        /**
         * Button(s) that should be rendered inside of the group
         */
        children: PropTypes.node.isRequired
    };

    render() {
        return (
            <div className={styles['btn-group']} role="group">
                {this.props.children}
            </div>
        );
    }
}
