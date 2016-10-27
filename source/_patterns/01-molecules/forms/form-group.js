import React, {PropTypes} from "react";
import cx from "classnames";
import styles from "./form-group.scss";

function FormGroup({className, htmlFor, label, children, ...props}) {
    props.className = cx(styles["form-group"], className);

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
    htmlFor: React.PropTypes.string,
    id: React.PropTypes.string,
    label: React.PropTypes.string,
};

exports.default = FormGroup;