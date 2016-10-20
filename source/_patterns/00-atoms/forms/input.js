import React, {PropTypes} from "react";
import ReactComponent from "../../react-utils/component";
import styles from "./forms.scss"
import cx from "classnames";

export default class Input extends ReactComponent {
    static propTypes = {
        onChange: PropTypes.func.isRequired,
        defaultValue: PropTypes.string,
        placeholder: PropTypes.string,
        onKeyUp: PropTypes.func,
        id: PropTypes.string,
        type: PropTypes.string,
        disabled: PropTypes.bool,
        autoFocus: PropTypes.bool,
        style: PropTypes.oneOf(["dotted"])
    };

    static defaultProps = {
        type: "text",
        autoFocus: false,
        disabled: false
    };

    render() {
        // classes
        const componentClass = cx(
            styles["form-control"],
            this.props.style && styles['form-' + this.props.style],
            this.props.className
        );


        return (
            <input
                disabled={this.props.disabled}
                autoFocus={this.props.autoFocus}
                className={componentClass}
                value={this.props.defaultValue}
                onChange={this.props.onChange}
                id={this.props.id}
                type={this.props.type}
                onKeyUp={this.props.onKeyUp}
                onBlur={this.props.onBlur}
                placeholder={this.props.placeholder}
            />
        )
    }
}