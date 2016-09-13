import React, {PropTypes} from "react";
import ReactComponent from "../../react-utils/component";

export default class TextElementComponent extends ReactComponent {
    static propTypes = {
        onChange: PropTypes.func.isRequired,
        defaultValue: PropTypes.string,
        placeholder: PropTypes.string,
        onKeyUp: PropTypes.func,
        id: PropTypes.string,
        type: PropTypes.string
    };

    static defaultProps = {
        className: "form-control",
        type: "text",
        autoFocus: false
    };

    render() {
        return (
            <input
                autoFocus={this.props.autoFocus}
                className={this.props.className}
                value={this.props.defaultValue}
                onChange={this.props.onChange}
                ref={(this.props.id) ? this.props.id : "config"}
                id={this.props.id}
                type={this.props.type}
                onKeyUp={this.props.onKeyUp}
                onBlur={this.props.onBlur}
                placeholder={this.props.placeholder}
            />
        )
    }
}