import React, {PropTypes} from "react";
import ReactComponent from "../../react-utils/component";

export default class Input extends ReactComponent {
    static PropTypes = {
        inputClass: PropTypes.string,
        type: PropTypes.string,
        placeholder: PropTypes.string,
        onFilterInput: PropTypes.func.isRequired,
        inputValue: PropTypes.string,
        autoFocus: PropTypes.bool
    };

    static defaultProps = {
        inputClass: "form-control",
        type: "text",
        placeholder: "placeholder missing!",
        inputValue: "",
        autoFocus: true
    };

    render() {
        return (
            <input
                autoFocus={this.props.autoFocus}
                type={this.props.type}
                className={this.props.inputClass}
                placeholder={this.props.placeholder}
                onChange={this.props.onFilterInput}
                value={this.props.inputValue}
                key="filterBarInput"
            />
        );
    }
}