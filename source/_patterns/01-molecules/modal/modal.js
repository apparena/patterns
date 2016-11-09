import React, {PropTypes} from "react";
import ReactComponent from "../../react-utils/component";
import Animate from "../../react-utils/animate";
import Draggable from "../../react-utils/draggable";
import cx from "classnames";
import styles from "./modal.scss";
import Icon from "../../00-atoms/icons/icons";
import Button from "../../00-atoms/button/button";

const MODAL_TYPES = [
    "primary",
    "secondary",
    "danger",
    "info",
    "success",
    "warning",
    "default",
];
const MODAL_SIZES = [
    "lg",
    "sm",
    "md",
    "xs",
    "xl"
];

export default class Modal extends ReactComponent {
    static propTypes = {
        className: PropTypes.string,
        size: PropTypes.oneOf(MODAL_SIZES),
        type: PropTypes.oneOf(MODAL_TYPES),
        headerText: PropTypes.string.isRequired,
        onSave: PropTypes.func,
        hintText: PropTypes.string,
        saveText: PropTypes.string,
        onClose: PropTypes.func,
        closeText: PropTypes.string,
        visible: PropTypes.bool,
        children: PropTypes.node.isRequired,
        draggable: PropTypes.bool,
        scrollable: PropTypes.bool,
        transition: PropTypes.string,
        buttonDisabled: PropTypes.bool,
        processRequest: PropTypes.bool
    };

    static defaultProps = {
        type: "default",
        transition: "expandIn",
        saveText: "Speichern",
        closeText: "Abbrechen",
        visible: true,
        draggable: false,
        scrollable: false,
        size: "sm",
        buttonDisabled: false
    };

    getInitState() {
        return {
            searchQuery: "",
        };
    }

    componentDidMount() {
        if (this.props.visible) {
            document.body.classList.add(styles["modal-open"]);
        }
    }

    componentWillUnmount() {
        document.body.classList.remove(styles["modal-open"]);
    }

    componentWillReceiveProps(nextProps) {
        if (!this.props.visible && nextProps.visible) {
            document.body.classList.add(styles["modal-open"]);
        } else if (this.props.visible && !nextProps.visible) {
            document.body.classList.remove(styles["modal-open"]);
        }
    }

    renderModalContent() {
        const {
            size,
            headerText,
            children,
            saveText,
            onSave,
            onClose,
            closeText,
            hintText,
            draggable,
            scrollable,
            type,
            className,
            buttonDisabled,
            processRequest
        } = this.props;
        const componentClass = cx(
            styles["modal-dialog"],
            styles["modal-" + size],
            styles["modal-" + type],
            draggable && styles["modal-draggable"],
            scrollable && styles["modal-scrollable"],
            className
        );
        return (
            <div className={componentClass}>
                <div className={cx(styles["modal-content"], styles["modal-content-" + size])}>
                    <div className={cx(styles["modal-header"])}>
                        <button type="button" className={styles.close} onClick={onClose}>
                            <Icon name="times-circle"/>
                        </button>
                        <h4 className={styles["modal-title"]}>{headerText}</h4>
                    </div>
                    <div className={cx(styles["modal-body"])}>
                        {children}
                    </div>
                    <div className={styles["modal-footer"]}>
                        {(onClose && closeText) &&
                        <Button
                            type="link"
                            onClick={onClose}
                            isDisabled={processRequest}
                        >
                            {closeText}
                        </Button>
                        }
                        {(onSave && saveText) &&
                        <Button
                            type={(type === "default") ? "primary" : type}
                            onClick={onSave}
                            isDisabled={buttonDisabled}
                            processRequest={processRequest}
                        >
                            {saveText}
                        </Button>
                        }
                    </div>
                    {(hintText) &&
                    <div className={styles["modal-footer-hint"]}>{hintText}</div>
                    }
                </div>
            </div>
        )
    }

    render() {
        const {visible, draggable, transition} = this.props;
        return (
            <div>
                <Animate transition={transition}>
                    <div
                        className={cx(styles.modal, (visible) && styles.show)}
                    >
                        {draggable ?
                            <Draggable
                                enabled={draggable}
                                handle={styles["modal-header"]}
                            >
                                {this.renderModalContent()}
                            </Draggable>
                            :
                            this.renderModalContent()}
                    </div>
                </Animate>
                {!draggable && <div className={cx(visible && styles["modal-backdrop"])}></div>}
            </div>
        );
    }
};