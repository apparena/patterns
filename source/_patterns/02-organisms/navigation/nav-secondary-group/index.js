import React from 'react';
import PropTypes from 'prop-types';
import ReactComponent from '../../../react-utils/component';
import cx from 'classnames';
import styles from '../nav-sidebar.scss';

export default class NavSecondaryGroup extends ReactComponent {
    static propTypes = {
        /**
         * Contents of the nav group
         */
        children: PropTypes.node.isRequired,
        /**
         * Title of the nav group
         */
        title: PropTypes.string
    };

    render() {
        const {children, title, ...props} = this.props;
        return (
            <div className={cx(styles['o-nav-sidebar'])}>
                <div className={styles['o-nav-sidebar-secondaryGroup']}>
                    {title &&
                    <div className={styles['title']} {...props}>
                        {title}
                    </div>
                    }
                    {children}
                </div>
            </div>
        );
    }
}