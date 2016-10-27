import React, {PropTypes} from "react";
import cx from "classnames";
import styles from "./form.scss";

function Form({className, type, ...props}) {
    props.className = cx(styles.form, styles["form-" + type], className);

    return <form {...props} />;
}

Form.propTypes = {
    type: PropTypes.oneOf(['basic', 'horizontal', 'inline']),
};
Form.defaultProps = {
    type: 'basic',
};

module.exports = Form;