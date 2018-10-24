import React from 'react';
import PropTypes from 'prop-types';
import ReactComponent from '../../../react-utils/component/index';
import cx from 'classnames';
import styles from './index.scss';

export default class SecondNav extends ReactComponent {
  render() {
    const { children } = this.props;
    return (
      <div className={cx(styles['o-nav'], styles['o-nav-secondary'])}>
        {children}
      </div>
    );
  }
}

SecondNav.propTypes = {
  /**
   * Contents of the nav
   */
  children: PropTypes.node.isRequired,
};
