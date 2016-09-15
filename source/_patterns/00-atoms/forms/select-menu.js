import React, {PropTypes} from "react";
import cx from "classnames";
import ReactComponent from "../../react-utils/component";
import Select from "react-select";
import styles from "./select-menu.scss";

export default class SelectElementComponent extends ReactComponent {
    static propTypes = {
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
    };

    static defaultProps = {
        multi: false,
        clearable: false,
        disabled: false,
    };

    render() {
        return (
            <div className={cx("input-group", styles.select)}>
                <Select
                    name="form-field-name"
                    id={this.props.id}
                    value={this.props.defaultValue}
                    options={this.props.options}
                    onChange={this.props.onChange}
                    multi={this.props.multi}
                    clearable={this.props.clearable}
                    autoBlur
                    clearAllText={"Test"}
                    clearValueText={"Test"}
                    placeholder={"Auswählen"}
                    searchingText={"Suchen..."}
                    noResultsText={"Keine Ergebnisse"}
                    disabled={this.props.disabled}
                />
            </div>
        );
    }
}