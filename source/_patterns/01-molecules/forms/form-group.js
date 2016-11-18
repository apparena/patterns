import React, {PropTypes} from "react";
import cx from "classnames";
import styles from "./form-group.scss";
import Tooltip from "../tooltip/tooltip";

function FormGroup({className, htmlFor, label, validationFeedback, children, validationState, ...props}) {
    let childrenProps= children.props;
    props.className = cx(styles["form-group"], className);

    if (validationState) {
        childrenProps.className = cx(childrenProps.className, styles[`has-${validationState}`]);
    }

    if (validationFeedback) {
        children = (
            <Tooltip label={validationFeedback}>
                {children}
            </Tooltip>
        )
    }

    return (
        <div {...props} >
            <label htmlFor={htmlFor}>{label}</label>
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
    validationState: PropTypes.string,
};

export default FormGroup;