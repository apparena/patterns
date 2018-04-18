import React from 'react';
import ReactComponent from '../../../react-utils/component';
import styles from './colorPicker.scss';

export default class HuePointer extends ReactComponent {
    render() {
        return (
            <div className={styles.slider}/>
        );
    }
}