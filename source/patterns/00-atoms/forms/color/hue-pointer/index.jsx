import React from 'react';
import styles from '../picker/index.scss';
import ReactComponent from '../../../../react-utils/component';

export default class HuePointer extends ReactComponent {
  render() {
    return (
      <div className={styles.slider} />
    );
  }
}
