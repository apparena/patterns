import React from 'react';
import PropTypes from 'prop-types';
import ReactComponent from '../../../react-utils/component';
import cx from 'classnames';
import styles from '../navs.scss';

export default class Nav extends ReactComponent {
    static propTypes = {
        /**
         * Content of the navigation
         */
        children: PropTypes.node.isRequired,
        /**
         * Display the navigation inline?
         */
        inline: PropTypes.bool,
        /**
         * Display the navigation tabbed?
         */
        tabs: PropTypes.bool,
        /**
         * Display the navigation as pills?
         */
        pills: PropTypes.bool,
        /**
         * Deprecated
         */
        stacked: PropTypes.bool,
        /**
         * Display the navigation vertically?
         */
        vertical: PropTypes.bool
    };

    static defaultProps = {
        inline: false,
        tabs: false,
        pills: false,
        stacked: false,
        vertical: false
    };

    render() {
        const {children} = this.props;
        // classes
        const componentClass = cx(
            styles.nav,
            this.props.inline && styles['nav-inline'],
            this.props.tabs && styles['nav-tabs'],
            this.props.pills && styles['nav-pills'],
            this.props.stacked && styles['nav-stacked'],
            this.props.stacked && styles['nav-stacked'],
            this.props.vertical && styles['flex-column'],
            this.props.className
        );
        const child = React.Children.map(children, (child) => {
            if (React.isValidElement(child)) {
                return React.cloneElement(child, child.props);
            }
        });
        return (
            <ul className={componentClass}>
                {child}
            </ul>
        );
    }
};