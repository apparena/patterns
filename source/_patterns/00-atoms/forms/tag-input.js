import React, {PropTypes} from "react";
import cx from "classnames";
import ReactComponent from "../../react-utils/component";
import Select from "react-select";
import styles from "./tag-input.scss";

export default class TagInput extends ReactComponent {
    static propTypes = {
        id: PropTypes.string,
        value: PropTypes.oneOfType([
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
        backspaceToRemoveMessage: PropTypes.string,
    };

    static defaultProps = {
        multi: false,
        clearable: false,
        autofocus: false,
        autoBlur: true,
        disabled: false,
        clearAllText: "",
        clearValueText: "",
        placeholder: "Auswählen",
        searchingText: "Suchen...",
        noResultsText: "Keine Ergebnisse",
        createOptionText: "Erstelle Tag",
        backspaceToRemoveMessage: "",
        name: "form-field-name"
    };

    getInitState() {
        this.promptTextCreatorBind = ::this.promptTextCreator;
    }

    promptTextCreator(label) {
        return `${this.props.createOptionText} "${label}"`;
    }

    render() {
        const {
            id,
            value,
            options,
            onChange,
            multi,
            autofocus,
            clearable,
            autoBlur,
            clearAllText,
            clearValueText,
            placeholder,
            searchingText,
            backspaceToRemoveMessage,
            noResultsText,
            disabled
        } = this.props;
        return (
            <div className={cx("input-group", styles.select)}>
                <Select.Creatable
                    name={name}
                    id={id}
                    promptTextCreator={this.promptTextCreatorBind}
                    value={value}
                    options={options}
                    onChange={onChange}
                    multi={multi}
                    autoFocus={autofocus}
                    clearable={clearable}
                    autoBlur={autoBlur}
                    clearAllText={clearAllText}
                    clearValueText={clearValueText}
                    placeholder={placeholder}
                    searchingText={searchingText}
                    backspaceToRemoveMessage={backspaceToRemoveMessage}
                    noResultsText={noResultsText}
                    disabled={disabled}
                />
            </div>
        );
    }
}