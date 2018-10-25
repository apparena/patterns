import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import ReactComponent from '../../../react-utils/component/index';
import Select from 'react-select';
import styles from './index.module.scss';

export default class SelectMenu extends ReactComponent {
    render() {
        const {creatable, name, id, defaultValue, options, onChange, multi, clearable, autoBlur, clearAllText,
            clearValueText, placeholder, searchingText, backspaceToRemoveMessage, noResultsText, disabled, autofocus,
            ...props} = this.props;

        if (creatable) {
            return (
                <div className={cx('input-group', styles.select)}>
                    <Select.Creatable
                        name={name}
                        id={id}
                        value={defaultValue}
                        options={options}
                        onChange={onChange}
                        multi={multi}
                        clearable={clearable}
                        autoBlur={autoBlur}
                        clearAllText={clearAllText}
                        clearValueText={clearValueText}
                        placeholder={placeholder}
                        searchingText={searchingText}
                        backspaceToRemoveMessage={backspaceToRemoveMessage}
                        noResultsText={noResultsText}
                        disabled={disabled}
                        {...props}
                    />
                </div>
            );
        }

        return (
            <div className={cx('input-group', styles.select)}>
                <Select
                    name={name}
                    id={id}
                    value={defaultValue}
                    options={options}
                    onChange={onChange}
                    multi={multi}
                    autofocus={autofocus}
                    clearable={clearable}
                    autoBlur={autoBlur}
                    clearAllText={clearAllText}
                    clearValueText={clearValueText}
                    placeholder={placeholder}
                    searchingText={searchingText}
                    backspaceToRemoveMessage={backspaceToRemoveMessage}
                    noResultsText={noResultsText}
                    disabled={disabled}
                    {...props}
                />
            </div>
        );
    }
}

SelectMenu.propTypes = {
  /**
   * The id of the component
   */
  id: PropTypes.string,
  /**
   * The selected option
   */
  defaultValue: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string,
    PropTypes.array
  ]).isRequired,
  /**
   * The selectable options as an array of objects. Each object should have a label and a value, i.e. {label: "An example", value: "example"}
   */
  options: PropTypes.array.isRequired,
  /**
   * Function that gets executed when a different option is selected
   */
  onChange: PropTypes.func.isRequired,
  /**
   * Allow the selection of multiple options simultaneously?
   */
  multi: PropTypes.bool,
  /**
   * Allow clearing all selected options simultaneously?
   */
  clearable: PropTypes.bool,
  /**
   * Disable the component?
   */
  disabled: PropTypes.bool,
  /**
   * Autofocus the component on mount?
   */
  autofocus: PropTypes.bool,
  /**
   * Title for the "clear" control when multi is true
   */
  clearAllText: PropTypes.string,
  /**
   * Title for the "clear" control
   */
  clearValueText: PropTypes.string,
  /**
   * Placeholder that is displayed when there's no value
   */
  placeholder: PropTypes.string,
  /**
   * Prompt for the search input
   */
  searchingText: PropTypes.string,
  /**
   * Placeholder that is displayed when there are no matching search results or a falsy value to hide it (can also be a react component)
   */
  noResultsText: PropTypes.string,
  /**
   * Prompt shown in input when at least one option in a multiselect is shown, set to '' to clear
   */
  backspaceToRemoveMessage: PropTypes.string
};

SelectMenu.defaultProps = {
  creatable: false,
  multi: false,
  clearable: false,
  autofocus: false,
  autoBlur: true,
  disabled: false,
  clearAllText: '',
  clearValueText: '',
  placeholder: 'Auswählen',
  searchingText: 'Suchen...',
  noResultsText: 'Keine Ergebnisse',
  name: 'form-field-name',
  backspaceToRemoveMessage: ''
};
