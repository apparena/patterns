import React from 'react';
import PropTypes from 'prop-types';
import { Button, Col, ReactComponent, Row } from '../../../index';
import Picker from './picker';
import SketchPicker from './sketchPicker';
import styles from './index.scss';

export default class Color extends React.Component {
  static propTypes = {
    handleClick: PropTypes.func,
    /**
     * Should the picker be rendered or not?
     */
    displayColorPicker: PropTypes.bool,
    /**
     * Array of predefined colors to displayed in the color picker
     */
    presetColors: PropTypes.array,
    /**
     * The value the color picker is set to by default
     */
    value: PropTypes.string,

    onChange: PropTypes.func,
    /**
     * Render only the picker itself
     */
    showOnlyPicker: PropTypes.bool
  };

  renderColorPicker() {
    if (this.props.displayColorPicker) {
      return (
        <div className={styles.popover}>
          <div className={styles.cover} onClick={this.props.handleClick}/>
          <div className={styles.wrapper}>
            <Picker
              width="100%"
              presetColors={this.props.presetColors}
              color={this.props.value}
              onChange={this.props.onChange}
              onInputChange={this.props.onInputChange}
              onSubmit={this.props.onSubmit}
              handleClose={this.props.handleClick}
            />
          </div>
        </div>
      );
    }
  }

  render() {
    if (this.props.showOnlyPicker) {
      return (
        <SketchPicker
          width="100%"
          presetColors={this.props.presetColors}
          color={this.props.value}
          onChange={this.props.onChange}
          onClose={this.props.handleClose}
        />
      );
    }
    return (
      <div className={styles.div}>
        <Row>
          <Col xs="12">
            <div className={styles.swatch} onClick={this.props.handleClick}>
              <div className={styles.color} style={{
                backgroundColor: this.props.value
              }}
              />
            </div>
            <Button
              type="outline-primary"
              onClick={this.props.handleClick}
            >
              {'Select color'}
            </Button>
          </Col>
        </Row>
        {this.renderColorPicker()}
      </div>
    );
  }
}
