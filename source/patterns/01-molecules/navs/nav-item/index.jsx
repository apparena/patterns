import React from 'react';
import PropTypes from 'prop-types';
import ReactComponent from '../../../react-utils/component/index';
import cx from 'classnames';
import styles from './index.scss';

export default class NavItem extends ReactComponent {
  static propTypes = {
    /**
     * Is the nav item currently activated?
     */
    active: PropTypes.bool,
    /**
     * Additional classNames
     */
    className: PropTypes.string,
    /**
     * Contents of the nav item
     */
    children: PropTypes.node.isRequired,
    /**
     * Disabled state
     */
    disabled: PropTypes.bool,
    /**
     * Is the nav item a dropdown?
     */
    dropdown: PropTypes.bool,
  };

  static defaultProps = {
    dropdown: false,
    inline: false,
    justified: false,
    tabs: false,
    pills: false,
    vertical: false
  };

  render() {
    const { children } = this.props;
    // classes
    const componentClass = cx(
      styles['nav-item'],
      this.props.disabled && styles['disabled'],
      this.props.dropdown && styles['dropdown'],
      this.props.justified && styles['nav-justified'],
      this.props.tabs && styles['nav-tabs'],
      this.props.pills && styles['nav-pills'],
      //this.props.inline && styles['nav-inline'],
      this.props.vertical && styles['nav-vertical'],
      this.props.className
    );
    const child = React.Children.map(children, (child) => {
      if (React.isValidElement(child)) {
        const className = cx(
          styles['nav-link'],
          this.props.active && !this.props.disabled && styles.active,
          this.props.disabled && styles.disabled,
          child.props.className
        );
        return React.cloneElement(child, {
          ...child.props,
          className
        });
      }
    });
    return (
      <li className={componentClass}>
        {child}
      </li>
    );
  }
};
