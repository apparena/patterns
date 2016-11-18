import React, {PropTypes} from "react";
import cx from "classnames";
import styles from "./form-group.scss";

function FormGroup({className, htmlFor, label, children, validationState, validationFeedback, ...props}) {
    props.className = cx(styles["form-group"], validationState && styles[`has-${validationState}`], className);

    children = React.Children.map(children, (child) => {
        if (child.type.name === "Input") {
            return React.cloneElement(child, {
                className: validationState ? cx(child.props.className, styles[`form-control-${validationState}`]) : cx(child.props.className)
            });
        } else {
            return React.cloneElement(child);
        }
    });

    return (
        <div {...props} >
            <label className={styles["form-control-label"]} htmlFor={htmlFor}>{label}</label>
            {children}
            {(validationState && validationFeedback) &&
            <div className={styles["form-control-feedback"]}>{validationFeedback}</div>
            }
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
    validationState: PropTypes.oneOf(["danger", "success", "warning"]),
};

export default FormGroup;