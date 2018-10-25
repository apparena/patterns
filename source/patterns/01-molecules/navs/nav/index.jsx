import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import ReactComponent from '../../../react-utils/component/index';
import styles from './index.module.scss';

export default class Nav extends ReactComponent {
  render() {
    const { children } = this.props;
    // classes
    const componentClass = cx(
      styles.nav,
      this.props.inline && styles['nav-inline'],
      this.props.justified && styles['nav-fill'],
      this.props.tabs && styles['nav-tabs'],
      this.props.pills && styles['nav-pills'],
      this.props.vertical && styles['nav-vertical'],
      this.props.className,
    );
    const child = React.Children.map(children, (child) => {
      if (React.isValidElement(child)) {
        // Pass down the rendering information to the nav-items and nav-links
        const {
          inline, justified, tabs, pills, vertical,
        } = this.props;
        return React.cloneElement(child, {
          ...child.props,
          inline,
          justified,
          tabs,
          pills,
          vertical,
        });
      }
    });
    return (
      <ul className={componentClass}>
        {child}
      </ul>
    );
  }
}

Nav.propTypes = {
  /**
   * Content of the navigation
   */
  children: PropTypes.node.isRequired,
  /**
   * Display the navigation inline?
   */
  inline: PropTypes.bool,
  /**
   * Distributes the width of each navigation item equally over the available width
   */
  justified: PropTypes.bool,
  /**
   * Display the navigation tabbed?
   */
  tabs: PropTypes.bool,
  /**
   * Display the navigation as pills?
   */
  pills: PropTypes.bool,
  /**
   * Display the navigation vertically?
   */
  vertical: PropTypes.bool,
};

Nav.defaultProps = {
  inline: false,
  justified: false,
  tabs: false,
  pills: false,
  vertical: false,
};
