import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import styles from './index.module.scss';

export default class CustomControl extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      checked: this.props.checked
    };
  }

  /**
   * Function which will be called every time the checkbox state changes
   * @param {SyntheticEvent} event The react `SyntheticEvent`
   */
  handleChange(event) {
    this.setState({
      checked: event.target.checked
    });
    this.props.onChange(event);
  };

  render() {
    const typeClassName = this.props.type === 'checkbox' ? 'custom-checkbox' : 'custom-radio';

    // Get validation state
    let inputStyle = styles['custom-control-input'];
    let labelStyle = styles['custom-control-label'];
    if (this.props.validationState === 'valid') {
      inputStyle = cx(styles['custom-control-input'], styles['is-valid']);
      labelStyle = cx(styles['custom-control-label'], styles['is-valid']);
    }
    if (this.props.validationState === 'invalid') {
      inputStyle = cx(styles['custom-control-input'], styles['is-invalid']);
      labelStyle = cx(styles['custom-control-label'], styles['is-invalid']);
    }

    return (
      <div
        className={cx(styles['custom-control'], styles[typeClassName])}
      >
        <input
          checked={this.state.checked}
          className={inputStyle}
          disabled={this.props.disabled}
          id={this.props.id}
          name={this.props.name}
          type={this.props.type}
          value={this.props.value}
          onChange={this.handleChange.bind(this)}
        />
        <label
          className={labelStyle}
          htmlFor={this.props.id}
        >
          {this.props.label}
        </label>
      </div>
    );
  }
}

CustomControl.propTypes = {
  /**
   * If the checkbox is checked or not
   */
  checked: PropTypes.bool,
  /**
   * CSS classes
   */
  className: PropTypes.string,
  /**
   * If the input field is disabled or not
   */
  disabled: PropTypes.bool,
  /**
   * ID of the input field. This is required as the Label needs to be assigned to the input field via ID
   */
  id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  /**
   * Label for the input field
   */
  label: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
  /**
   * Name of the input field
   */
  name: PropTypes.string.isRequired,

  /**
   * Gets called when the user changes the checkbox state
   *
   * @param {SyntheticEvent} event The react `SyntheticEvent`
   */
  onChange: PropTypes.func,
  /**
   * Is it a checkbox or a radio button
   */
  type: PropTypes.oneOf(['checkbox', 'radio']),
  /**
   * Validation state the input field is currently in
   */
  validationState: PropTypes.oneOf(['default', 'valid', 'invalid']),
  /**
   * the value of the input field, which will be submitted
   */
  value: PropTypes.string
};

CustomControl.defaultProps = {
  checked: false,
  disabled: false,
  id: false,
  type: 'checkbox',
  validationState: 'default',
  value: '',
  onChange: () => {}
};
