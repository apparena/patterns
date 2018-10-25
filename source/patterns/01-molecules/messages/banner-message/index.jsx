import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import ReactComponent from '../../../react-utils/component/index';
import Icon from '../../../00-atoms/icons/index';
import styles from './index.module.scss';

const ALERT_TYPES = [
  'danger',
  'info',
  'success',
  'warning',
];

export default class Alert extends ReactComponent {
  render() {
    const {
      type, className, icon, children,
    } = this.props;
    const classes = cx(
      styles['m-banner-message'],
      styles[`m-banner-message-${type}`],
      className,
    );

    return (
      <div className={classes}>
        <Icon name={icon} />
        {children}
      </div>
    );
  }
}

Alert.propTypes = {
  /**
   * Content of the banner message
   */
  children: PropTypes.node.isRequired,
  /**
   * Sets the default styling of the banner message
   */
  type: PropTypes.oneOf(ALERT_TYPES).isRequired,
  /**
   * Additional classNames for the banner
   */
  className: PropTypes.string,
  /**
   * Which icon to display in the center of the banner
   */
  icon: PropTypes.string.isRequired,
};

Alert.defaultProps = {
  type: 'info',
  classNames: '',
};
