import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import ReactComponent from '../../../react-utils/component/index';
import styles from './index.scss';

const ALERT_TYPES = [
  'danger',
  'info',
  'success',
  'warning',
];

export default class Alert extends ReactComponent {
  renderButton() {
    if (this.props.dismissible) {
      return (
        <button type="button" className={styles.close}>
          <span>&times;</span>
        </button>
      );
    }
  }

  render() {
    const classes = cx(
      styles.alert,
      styles[`alert-${this.props.type}`],
      this.props.classNames,
      this.props.dismissible ? styles['alert-dismissible'] : '',
    );

    let iconPath = 'https://aa-ads.s3.amazonaws.com/apps/tippspiel/icon-alert-danger.svg';
    switch (this.props.type) {
      case 'info':
        iconPath = 'https://aa-ads.s3.amazonaws.com/apps/tippspiel/icon-alert-info.svg';
        break;
      case 'success':
        iconPath = 'https://aa-ads.s3.amazonaws.com/apps/tippspiel/icon-alert-success.svg';
        break;
      case 'warning':
        iconPath = 'https://aa-ads.s3.amazonaws.com/apps/tippspiel/icon-alert-warning.svg';
        break;
    }

    return (
      <div className={classes}>
        <div className={styles.icon}>
          <img src={iconPath} />
        </div>
        {this.props.children}
        {this.renderButton()}
      </div>
    );
  }
}

Alert.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.element,
  ]).isRequired,
  /**
   * Type of alert
   */
  type: PropTypes.oneOf(ALERT_TYPES).isRequired,
  /**
   * Dismissable alerts have an X icon on the right top and can be closed by the user
   */
  dismissible: PropTypes.bool,
};

Alert.defaultProps = {
  dismissible: false,
  classNames: '',
};
