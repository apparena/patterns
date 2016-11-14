import React, {PropTypes} from "react";
import cx from "classnames";
import styles from "./modal.scss";

function ModalFooter({className, children, ...props}) {
    props.className = cx(styles["modal-footer"], className);
    return (
        <div {...props}>
            {children}
        </div>
    );
}

ModalFooter.propTypes = {
    className: PropTypes.string,
    children: PropTypes.node.isRequired,
};

export default ModalFooter;