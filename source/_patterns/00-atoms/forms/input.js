import React, {PropTypes} from "react";
import ReactComponent from "../../react-utils/component";
import styles from "./forms.scss";
import cx from "classnames";

export default class Input extends ReactComponent {
    static propTypes = {
        onChange: PropTypes.func.isRequired,
        defaultValue: PropTypes.string,
        placeholder: PropTypes.string,
        onKeyUp: PropTypes.func,
        id: PropTypes.string,
        type: PropTypes.string,
        tabIndex: PropTypes.number,
        disabled: PropTypes.bool,
        autoFocus: PropTypes.bool,
        style: PropTypes.oneOf(["dotted"])
    };

    static defaultProps = {
        tabIndex: 0,
        type: "text",
        autoFocus: false,
        disabled: false
    };

    render() {
        const {style, className, disabled, autoFocus, defaultValue, onChange, id, type, onKeyUp, onBlur, placeholder, tabIndex} = this.props;
        // classes
        const componentClass = cx(
            styles["form-control"],
            style && styles['form-' + style],
            className
        );

        return (
            <input
                tabIndex={tabIndex}
                disabled={disabled}
                autoFocus={autoFocus}
                className={componentClass}
                value={defaultValue}
                onChange={onChange}
                id={id}
                type={type}
                onKeyUp={onKeyUp}
                onBlur={onBlur}
                placeholder={placeholder}
            />
        )
    }
}