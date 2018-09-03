import React from 'react';
import PropTypes from 'prop-types';
import { CustomPicker as customPicker } from 'react-color';
import {
  Alpha, Checkboard, Hue, Saturation,
} from 'react-color/lib/components/common';
import SketchFields from 'react-color/lib/components/sketch/SketchFields';
import SketchPresetColors from 'react-color/lib/components/sketch/SketchPresetColors';
import styles from './index.scss';

class SketchPicker extends React.Component {
  constructor(props) {
    super(props);
    this.onChange = this.onChange.bind(this);
  }

  onChange(data) {
    const { onChange } = this.props;
    onChange(data);
  }

  render() {
    const { width, disableAlpha, presetColors } = this.props;
    return (
      <div className={styles.picker} style={width && { width }}>
        <div className={styles.saturation}>
          <Saturation
            className={styles.Saturation}
            {...this.props}
            onChange={this.onChange}
          />
        </div>
        <div className={styles.controls}>
          <div className={styles.sliders}>
            <div className={styles.hue}>
              <Hue
                className={styles.Hue}
                {...this.props}
                onChange={this.onChange}
              />
            </div>
            <div className={styles.alpha}>
              <Alpha className={styles.Alpha} {...this.props} onChange={this.onChange} />
            </div>
          </div>
          <div className={styles.color}>
            <Checkboard />
            <div className={styles.activeColor} style={{ background: this.props.color }} />
          </div>
        </div>
        <div className={styles.fields}>
          <SketchFields
            {...this.props}
            onChange={this.onChange}
            disableAlpha={disableAlpha}
          />
        </div>
        <div className={styles.presets}>
          <SketchPresetColors colors={presetColors} onClick={this.onChange} />
        </div>
      </div>
    );
  }
}

SketchPicker.propTypes = {
  width: PropTypes.string,
  presetColors: PropTypes.array,
  color: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default customPicker(SketchPicker);
