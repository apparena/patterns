import React from 'react';
import PropTypes from 'prop-types';
import ReactComponent from '../../react-utils/component';
import cx from 'classnames';
import styles from './navbar.scss';

export default class Navbar extends ReactComponent {
    static propTypes = {
        /**
         * Contents of the navbar
         */
        children: PropTypes.oneOfType([
            PropTypes.string,
            PropTypes.element,
            PropTypes.arrayOf(
                PropTypes.element
            )
        ]).isRequired,
        /**
         * Makes the navbar always visible either at the top or at the bottom of the page
         */
        fixed: PropTypes.oneOf(['top', 'bottom']),
        /**
         * Color scheme of the navbar
         */
        colorScheme: PropTypes.oneOf(['light', 'inverse']),
        /**
         * Background color selection of the navbar
         */
        bg: PropTypes.oneOf(['primary', 'success', 'info', 'warning', 'danger', 'inverse', 'faded'])
    };

    static defaultProps = {
        colorScheme: 'light',
        bg: 'faded'
    };

    render() {
        const {children} = this.props;
        // classes
        const componentClass = cx(
            styles.navbar,
            this.props.fixed && styles[`navbar-fixed-${this.props.fixed}`],
            this.props.colorScheme && styles[`navbar-${this.props.colorScheme}`],
            this.props.bg && styles[`bg-${this.props.bg}`],
            this.props.className
        );
        const child = React.Children.map(children, (child) => {
            if (React.isValidElement(child)) {
                return React.cloneElement(child, child.props);
            }
        });
        return (
            <nav className={componentClass}>
                {child}
            </nav>
        );
    }
};