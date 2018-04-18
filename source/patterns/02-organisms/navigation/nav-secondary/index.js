import React from 'react';
import PropTypes from 'prop-types';
import ReactComponent from '../../../react-utils/component/index.jsx';
import cx from 'classnames';
import styles from './index.scss';

export default class SecondNav extends ReactComponent {
    static propTypes = {
        /**
         * Contents of the nav
         */
        children: PropTypes.node.isRequired
    };

    render() {
        const {children} = this.props;
        return (
            <div className={cx(styles['o-nav'], styles['o-nav-secondary'])}>
                {children}
            </div>
        );
    }
}