import React from 'react';
import PropTypes from 'prop-types';
import ReactComponent from '../../../react-utils/component/index';
import Notification from '../notification/index';
import styles from './index.module.scss';

export default class NotificationContainer extends ReactComponent {
  renderNotification(notification, key) {
    if (notification.props.header && notification.props.type) {
      return <Notification key={key} header={notification.props.header} type={notification.props.type} />;
    }
    return null;
  }

  render() {
    return (
      <div className={styles.notificationContainer}>
        <div>
          {this.props.notifications.map(this.renderNotification, this)}
        </div>
      </div>
    );
  }
}

NotificationContainer.propTypes = {
  /**
   * An array of notifications
   */
  notifications: PropTypes.array.isRequired,
};
