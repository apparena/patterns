import React, {PropTypes} from "react";
import cx from "classnames";
import styles from "./input-group.scss";

function InputGroup({className, children, addon, id, ...props}) {
    props.className = cx(styles["input-group"], className);

    return (
        <div {...props} >
            <span className={styles["input-group-addon"]} id={id}>{addon}</span>
            {children}
        </div>
    );
}

InputGroup.propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
    addon: PropTypes.node,
    id: PropTypes.string
};

export default InputGroup;