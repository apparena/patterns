import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import ReactComponent from '../../react-utils/component/index';
import styles from './index.module.scss';

const SPINNER_TYPES = [
  'default',
  'primary',
  'secondary',
  'success',
  'info',
  'warning',
  'danger',
  'link',
  'outline-primary',
  'outline-secondary',
  'outline-success',
  'outline-info',
  'outline-warning',
  'outline-danger',
  'inverted',
];

export default class Spinner extends ReactComponent {
  render() {
    const componentClass = cx(
      styles.spinner,
      styles[`spinner-${this.props.type}`],
      styles[`spinner-${this.props.size}`],
      this.props.className,
    );

    return (
      <div className={componentClass}>
        <span className={cx(styles['spinner-dot'], styles['spinner-dot-first'])} />
        <span className={cx(styles['spinner-dot'], styles['spinner-dot-second'])} />
        <span className={cx(styles['spinner-dot'], styles['spinner-dot-third'])} />
      </div>
    );
  }
}

Spinner.propTypes = {
  /**
   * Additional classNames for the spinner
   */
  className: PropTypes.string,
  /**
   * Sets the size of the spinner
   */
  size: PropTypes.oneOf(['sm', 'md', 'lg']),
  /**
   * Sets the default styling
   */
  type: PropTypes.oneOf(SPINNER_TYPES),
};

Spinner.defaultProps = {
  type: 'default',
  size: 'sm',
};
