import React from "react";
import PropTypes from "prop-types";
import cx from "classnames";
import styles from "./form.scss";

function Form({className, type, ...props}) {
    props.className = cx(
        styles.form,
        styles[`form-${type}`],
        className
    );

    return <form {...props} />;
}

Form.propTypes = {
    className: PropTypes.string,
    type: PropTypes.oneOf(['basic', 'horizontal', 'inline']),
};
Form.defaultProps = {
    type: 'basic',
};

export default Form;