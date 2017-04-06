import React, {PropTypes} from "react";
import styles from "./forms.scss";
import cx from "classnames";

function Input({className, style, refCallback, defaultValue, isDisabled, ...props}) {
    if (refCallback) {
        props.ref = refCallback; // eslint-disable-line
    }
    if (isDisabled) {
        props.disabled = isDisabled; // eslint-disable-line
    }
    props.value = defaultValue; // eslint-disable-line
    props.className = cx(
        styles["form-control"],
        styles["input-ie-fix"],
        style && styles[`form-${style}`],
        className
    );

    return <input {...props} />
}

Input.propTypes = {
    onChange: PropTypes.func.isRequired,
    defaultValue: PropTypes.string,
    placeholder: PropTypes.string,
    onKeyUp: PropTypes.func,
    refCallback: PropTypes.func,
    id: PropTypes.string,
    className: PropTypes.string,
    name: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    type: PropTypes.string,
    tabIndex: PropTypes.number,
    isDisabled: PropTypes.bool,
    autoFocus: PropTypes.bool,
    style: PropTypes.oneOf(["dotted", "inline"])
};

Input.defaultProps = {
    defaultValue: "",
    tabIndex: 0,
    type: "text",
    autoFocus: false,
    isDisabled: false
};

export default Input;