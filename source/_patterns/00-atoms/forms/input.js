import React, {PropTypes} from "react";
import ReactComponent from "../../reactComponent";

export default class Input extends ReactComponent {
    static PropTypes = {
        inputClass: PropTypes.string,
        type: PropTypes.string,
        placeholder: PropTypes.string
    };

    static defaultProps = {
        inputClass: "form-control",
        type: "text",
        placeholder: "placeholder missing!"
    };

    render() {
        return (
            <input type={this.props.type} className={this.props.inputClass} placeholder={this.props.placeholder}/>
        );
    }
}