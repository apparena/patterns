import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import ReactComponent from '../../../react-utils/component';
import Select from 'react-select';
import styles from './select-menu.scss';

export default class SelectMenu extends ReactComponent {
    static propTypes = {
        /** **/
        id: PropTypes.string,
        defaultValue: PropTypes.oneOfType([
            PropTypes.number,
            PropTypes.string,
            PropTypes.array
        ]).isRequired,
        options: PropTypes.array.isRequired,
        onChange: PropTypes.func.isRequired,
        multi: PropTypes.bool,
        clearable: PropTypes.bool,
        disabled: PropTypes.bool,
        autofocus: PropTypes.bool,
        clearAllText: PropTypes.string,
        clearValueText: PropTypes.string,
        placeholder: PropTypes.string,
        searchingText: PropTypes.string,
        noResultsText: PropTypes.string,
        backspaceToRemoveMessage: PropTypes.string
    };

    static defaultProps = {
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

    render() {
        if (this.props.creatable) {
            return (
                <div className={cx('input-group', styles.select)}>
                    <Select.Creatable
                        name={this.props.name}
                        id={this.props.id}
                        value={this.props.defaultValue}
                        options={this.props.options}
                        onChange={this.props.onChange}
                        multi={this.props.multi}
                        clearable={this.props.clearable}
                        autoBlur={this.props.autoBlur}
                        clearAllText={this.props.clearAllText}
                        clearValueText={this.props.clearValueText}
                        placeholder={this.props.placeholder}
                        searchingText={this.props.searchingText}
                        backspaceToRemoveMessage={this.props.backspaceToRemoveMessage}
                        noResultsText={this.props.noResultsText}
                        disabled={this.props.disabled}
                    />
                </div>
            );
        }
        return (
            <div className={cx('input-group', styles.select)}>
                <Select
                    name={this.props.name}
                    id={this.props.id}
                    value={this.props.defaultValue}
                    options={this.props.options}
                    onChange={this.props.onChange}
                    multi={this.props.multi}
                    autofocus={this.props.autofocus}
                    clearable={this.props.clearable}
                    autoBlur={this.props.autoBlur}
                    clearAllText={this.props.clearAllText}
                    clearValueText={this.props.clearValueText}
                    placeholder={this.props.placeholder}
                    searchingText={this.props.searchingText}
                    backspaceToRemoveMessage={this.props.backspaceToRemoveMessage}
                    noResultsText={this.props.noResultsText}
                    disabled={this.props.disabled}
                />
            </div>
        );
    }
}