import React from 'react';
import PropTypes from 'prop-types';
import {ReactComponent} from 'apparena-patterns-react';
import {CustomPicker as customPicker} from 'react-color';
import {Alpha, Checkboard, Hue, Saturation} from 'react-color/lib/components/common';
import SketchFields from 'react-color/lib/components/sketch/SketchFields';
import SketchPresetColors from 'react-color/lib/components/sketch/SketchPresetColors';
import styles from './sketchPicker.scss';

class SketchPicker extends React.Component {
    static propTypes = {
        width: PropTypes.string,
        presetColors: PropTypes.array,
        color: PropTypes.string.isRequired,
        onChange: PropTypes.func.isRequired
    };


    onChange(data: any) {
        this.props.onChange(data);
    }

    render() {
        return (
            <div className={styles.picker} style={this.props.width && {width: this.props.width}}>
                <div className={styles.saturation}>
                    <Saturation className={styles.Saturation} {...this.props} onChange={::this.onChange}/>
                </div>
                <div className={styles.controls}>
                    <div className={styles.sliders}>
                        <div className={styles.hue}>
                            <Hue className={styles.Hue} {...this.props} onChange={::this.onChange}/>
                        </div>
                        <div className={styles.alpha}>
                            <Alpha className={styles.Alpha} {...this.props} onChange={::this.onChange}/>
                        </div>
                    </div>
                    <div className={styles.color}>
                        <Checkboard/>
                        <div className={styles.activeColor} style={{background: this.props.color}}/>
                    </div>
                </div>
                <div className={styles.fields}>
                    <SketchFields {...this.props} onChange={::this.onChange} disableAlpha={this.props.disableAlpha}/>
                </div>
                <div className={styles.presets}>
                    <SketchPresetColors colors={this.props.presetColors} onClick={::this.onChange}/>
                </div>
            </div>
        );
    }
}

export default customPicker(SketchPicker);