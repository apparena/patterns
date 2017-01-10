import React, {PropTypes} from "react";
import cx from "classnames";
import styles from "./modal.scss";
import Icon from "../../00-atoms/icons/icons";

function ModalHeader({className, headerText, onClose, ...props}) {
    props.className = cx(styles["modal-header"], className);
    return (
        <div {...props}>
            {onClose &&
            <button type="button" className={styles.close} onClick={onClose}>
                <Icon name="times"/>
            </button>
            }
            <h5 className={styles["modal-title"]}>{headerText}</h5>
        </div>
    );
}

ModalHeader.propTypes = {
    className: PropTypes.string,
    headerText: PropTypes.string,
    onClose: PropTypes.func,
};

export default ModalHeader;