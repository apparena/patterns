import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import { CustomPicker as customPicker } from 'react-color';
import { Hue, Saturation, Swatch } from 'react-color/lib/components/common';
import ColorHelper from 'react-color/lib/helpers/color';
import styles from './index.scss';
import { Button, Input, ReactComponent } from '../../../../index';
import Pointer from '../hue-pointer';

class Picker extends React.Component {
  constructor(props) {
    super(props);
    const { color } = this.props;
    this.handleSubmit = this.submit.bind(this);
    this.onChangeSaturation = this.onChangeSaturation.bind(this);
    this.onChange = this.onChange.bind(this);
    this.onInputChange = this.onInputChange.bind(this);
    this.state = {
      hex: color,
      buttonDisabled: true,
    };
  }

  componentWillReceiveProps(nextProps, nextContext) {
    if (this.state.hex !== nextProps.color) {
      this.setState({
        hex: nextProps.color,
      });
    }
  }

  componentWillUnmount() {
    this.props.onChange(this.props.hex);
  }

  onChangeSaturation(color) {
    const colorObj = ColorHelper.toState(color);
    const { hex } = colorObj;
    this.onChange(hex);
  }

  onInputChange(e) {
    const hex = e.target.value;
    if (ColorHelper.isValidHex(hex)) {
      this.props.onInputChange({ hex });
      this.setState({
        hex,
        buttonDisabled: false,
      });
    } else {
      this.setState({
        hex,
        buttonDisabled: true,
      });
    }
  }

  submit(e) {
    if (!this.state.hex.startsWith('#')) {
      this.setState({
        hex: `#${this.state.hex}`,
      });
    }
    if (ColorHelper.isValidHex(this.state.hex)) {
      this.props.onSubmit(this.state.hex);
    }
    this.props.handleClose(e);
  }

  onChange(hex) {
    if (ColorHelper.isValidHex(hex)) {
      this.setState({
        hex,
        buttonDisabled: false,
      });
      this.props.onChange(hex);
    }
  }

  render() {
    const { presetColors, triangle, ...props } = this.props;
    return (
      <div className={styles.card}>
        <div className={styles.triangleShadow} />
        <div className={cx(styles.triangle, styles[`triangle-${triangle}`])} />
        <div className={styles.body}>
          <div className={styles.saturation}>
            <Saturation
              className={styles.Saturation}
              {...props}
              onChange={this.onChangeSaturation}
            />
          </div>
          <div className={styles.hue}>
            <Hue
              {...props}
              onChange={this.onChangeSaturation}
              pointer={Pointer}
            />
          </div>
          <div className={styles.swatch}>
            {presetColors.map((c, i) => (
              <Swatch
                key={i}
                color={c}
                hex={c}
                style={{
                  width: '30px',
                  height: '30px',
                  float: 'left',
                  borderRadius: '4px',
                  margin: '0 6px 6px 0',
                  cursor: 'pointer',
                }}
                onClick={this.onChange}
              />
            ), this)}
          </div>
          <div className={styles.input}>
            <Input
              defaultValue={this.state.hex}
              onChange={this.onInputChange}
            />
          </div>
          <div className={styles.submit}>
            <Button
              type="primary"
              block
              onClick={this.handleSubmit}
              isDisabled={this.state.buttonDisabled}
            >
              {'Submit'}
            </Button>
          </div>
        </div>
      </div>
    );
  }
}

Picker.propTypes = {
  width: PropTypes.string,
  triangle: PropTypes.string,
  presetColors: PropTypes.array,
  color: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  handleClose: PropTypes.func.isRequired,
  onInputChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
};

Picker.defaultProps = {
  width: '276px',
  presetColors: [],
  triangle: 'top-left',
};

export default customPicker(Picker);
