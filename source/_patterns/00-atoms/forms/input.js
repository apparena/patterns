import React, {PropTypes} from "react";
import styles from "./forms.scss";
import cx from "classnames";

function Input({className, style, refCallback, defaultValue, ...props}) {
    if (refCallback) {
        props.ref = refCallback;
    }
    props.value = defaultValue;
    props.className = cx(
        styles["form-control"],
        style && styles['form-' + style],
        className
    );

    return <input {...props} />;
}

Input.propTypes = {
    onChange: PropTypes.func.isRequired,
    defaultValue: PropTypes.string,
    placeholder: PropTypes.string,
    onKeyUp: PropTypes.func,
    refCallback: PropTypes.func,
    id: PropTypes.string,
    name: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    type: PropTypes.string,
    tabIndex: PropTypes.number,
    disabled: PropTypes.bool,
    autoFocus: PropTypes.bool,
    style: PropTypes.oneOf(["dotted", "inline"])
};

Input.defaultProps = {
    tabIndex: 0,
    type: "text",
    autoFocus: false,
    disabled: false
};

export default Input;