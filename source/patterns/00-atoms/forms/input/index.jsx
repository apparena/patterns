import React from 'react';
import PropTypes from 'prop-types';
import styles from './index.scss';
import cx from 'classnames';

function Input({
  className, style, refCallback, defaultValue, isDisabled, ...props
}) {
  if (refCallback) {
    props.ref = refCallback;
  }
  if (isDisabled) {
    props.disabled = isDisabled;
  }
  props.value = defaultValue;
  props.className = cx(
    styles['form-control'],
    ((navigator.userAgent.indexOf('MSIE') !== -1) || (!!document.documentMode === true)) && styles['input-ie-fix'],
    style && styles[`form-${style}`],
    className,
  );

  // If an item is submitted, then
  if (props.icon) {
    return (
      <div className={styles.withIcon}>
        <i className={props.icon} />
        <input {...props} />
      </div>

    );
  }

  return (
    <input {...props} />
  );
}

Input.propTypes = {
  /**
   * Should the input field automatically being focused on load?
   */
  autoFocus: PropTypes.bool,
  /**
   * CSS classes
   */
  className: PropTypes.string,
  /**
   * defaultValue for the input field
   */
  defaultValue: PropTypes.string,
  /**
   * Classname for an icon to be added to the beginning of the input field, e.g. 'icon icon-search'
   */
  icon: PropTypes.string,
  /**
   * ID of the input field.
   */
  id: PropTypes.string,
  /**
   * If the input field is disabled or not
   */
  isDisabled: PropTypes.bool,
  /**
   * Name of the input field
   */
  name: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  /**
   * Gets called when the user changes the input field
   *
   * @param {SyntheticEvent} event The react `SyntheticEvent`
   */
  onChange: PropTypes.func.isRequired,
  onKeyUp: PropTypes.func,
  /**
   * HTML5 placeholder
   */
  placeholder: PropTypes.string,
  refCallback: PropTypes.func,
  style: PropTypes.oneOf(['dotted', 'inline']),
  /**
   * HTML tab index
   */
  tabIndex: PropTypes.number,
  /**
   * What type of input field should get rendered
   * @see https://www.w3schools.com/html/html_form_input_types.asp HTML5 Input types
   */
  type: PropTypes.string,
};

Input.defaultProps = {
  defaultValue: '',
  tabIndex: 0,
  type: 'text',
  autoFocus: false,
  isDisabled: false,
};

Input.displayName = 'Input';

export default Input;
