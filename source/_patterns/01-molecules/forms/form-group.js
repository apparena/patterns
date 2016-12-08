import React, {PropTypes} from "react";
import cx from "classnames";
import styles from "./form-group.scss";
import Tooltip from "../tooltip/tooltip";

function renderChildren(validationState, validationFeedback, children) {
    if (validationState && validationState !== "default" && validationFeedback) {
        return (
            <Tooltip
                label={validationFeedback}
                zIndex={2050}
                className={styles.tooltip}
            >
                {children}
            </Tooltip>
        )
    }
    return children;
}

function FormGroup({className, htmlFor, label, children, validationState, validationFeedback, ...props}) {
    props.className = cx(styles["form-group"], validationState && styles[`has-${validationState}`], className);

    children = React.Children.map(children, (child) => {
        if (child.type.name === "Input") {
            const input =  React.cloneElement(child, {
                className: validationState ? cx(child.props.className, styles[`form-control-${validationState}`]) : cx(child.props.className)
            });
            return renderChildren(validationState, validationFeedback, input)
        } else {
            return React.cloneElement(child);
        }
    });

    return (
        <div {...props}>
            <label className={styles["form-control-label"]} htmlFor={htmlFor}>{label}</label>
            {children}
        </div>
    );
}

FormGroup.propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
    htmlFor: PropTypes.string,
    id: PropTypes.string,
    label: PropTypes.string,
    validationFeedback: PropTypes.string,
    validationState: PropTypes.oneOf(["default", "danger", "success", "warning"]),
};

export default FormGroup;