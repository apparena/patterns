import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import ReactComponent from '../../react-utils/component/index';
import styles from './index.scss';

const ICON_TYPES = [
  'default',
  'primary',
  'secondary',
  'success',
  'info',
  'warning',
  'danger',
];

export default class Icon extends ReactComponent {
  render() {
    const {
      name,
      type,
      size,
      inverse,
      flip,
      rotate,
      stack,
      border,
      pulse,
      spin,
      fixedWidth,
      className,
      ...props
    } = this.props;
    // classes
    const componentClass = cx(
      'icon',
      `icon-${name}`,
      styles[`icon-${type}`],
      size && styles[`icon-${size}`],
      inverse && styles['icon-inverse'],
      flip && styles[`icon-flip-${flip}`],
      rotate && styles[`icon-rotate-${rotate}`],
      stack && styles['icon-stack'] && styles[`icon-stack-${stack}`],
      border && styles['icon-border'],
      pulse && styles['icon-pulse'],
      spin && styles['icon-spin'],
      fixedWidth && styles['icon-fw'],
      className,
    );

    return (
      <i
        {...props}
        className={componentClass}
      />
    );
  }
}

Icon.propTypes = {
  /**
   * Sets the styling of the icon
   */
  type: PropTypes.oneOf(ICON_TYPES),
  /**
   * Should the icon be drawn with a border?
   */
  border: PropTypes.bool,
  /**
   * Additional classNames
   */
  className: PropTypes.string,
  /**
   * Should the icon width be fixed instead of dynamic?
   */
  fixedWidth: PropTypes.bool,
  /**
   * Flip the icon either horizontally or vertically
   */
  flip: PropTypes.oneOf(['horizontal', 'vertical']),
  /**
   * Draw this icon color inverted?
   */
  inverse: PropTypes.bool,
  /**
   * Name of the icon to draw
   */
  name: PropTypes.string.isRequired,
  /**
   * Continually spin the icon around itself (twice as fast as spin)
   */
  pulse: PropTypes.bool,
  /**
   * Rotate the icon either 90°, 180° or 270°
   */
  rotate: PropTypes.oneOf([90, 180, 270]),
  /**
   * Draw this icon larger
   */
  size: PropTypes.oneOf(['lg', '2x', '3x', '4x', '5x']),
  /**
   * Continually spin the icon around itself
   */
  spin: PropTypes.bool,
  /**
   * Stack icons
   */
  stack: PropTypes.oneOf(['1x', '2x']),
};
