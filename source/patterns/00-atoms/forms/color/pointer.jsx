import React from 'react';
import {ReactComponent} from 'apparena-patterns-react';
import styles from './colorPicker.scss';

export default class HuePointer extends ReactComponent {
    render() {
        return (
            <div className={styles.slider}/>
        );
    }
}