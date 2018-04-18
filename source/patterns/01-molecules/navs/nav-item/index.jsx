import React from 'react';
import PropTypes from 'prop-types';
import ReactComponent from '../../../react-utils/component/index';
import cx from 'classnames';
import styles from './index.scss';

export default class Nav extends ReactComponent {
    static propTypes = {
        /**
         * Additional classNames
         */
        className: PropTypes.string,
        /**
         * Contents of the nav item
         */
        children: PropTypes.node.isRequired,
        /**
         * Is the nav item a dropdown?
         */
        dropdown: PropTypes.bool,
        /**
         * Is the nav item currently activated?
         */
        active: PropTypes.bool
    };

    static defaultProps = {
        dropdown: false
    };

    render() {
        const {children} = this.props;
        // classes
        const componentClass = cx(
            styles['nav-item'],
            this.props.dropdown && styles['dropdown'],
            this.props.className
        );
        const child = React.Children.map(children, (child) => {
            if (React.isValidElement(child)) {
                const className = cx(
                    styles['nav-link'],
                    this.props.active && styles.active,
                    child.props.className
                );
                return React.cloneElement(child, {...child.props, className});
            }
        });
        return (
            <li className={componentClass}>
                {child}
            </li>
        );
    }
};