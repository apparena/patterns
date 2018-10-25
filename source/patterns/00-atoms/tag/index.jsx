import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import ReactComponent from '../../react-utils/component/index';
import styles from './index.module.scss';

const TAG_TYPES = [
  'default',
  'primary',
  'secondary',
  'success',
  'info',
  'warning',
  'danger',
];

export default class Tag extends ReactComponent {
  render() {
    // classes
    const componentClass = cx(
      styles.badge,
      styles[`badge-${this.props.type}`],
      this.props.pill && styles['badge-pill'],
      this.props.className,
    );

    return (
      <span
        className={componentClass}
      >
        {this.props.children}
      </span>
    );
  }
}

Tag.propTypes = {
  /**
   * Additional classNames for the tag
   */
  className: PropTypes.string,
  /**
   * Determines the default styling of the tag
   */
  type: PropTypes.oneOf(TAG_TYPES),
  /**
   * Should the tag be displayed as a pill rather than a rectangle?
   */
  pill: PropTypes.bool,
};
Tag.defaultProps = {
  type: 'default',
};
