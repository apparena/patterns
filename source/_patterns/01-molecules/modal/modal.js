import React, {PropTypes} from "react";
import ReactComponent from "../../react-utils/component";
import Animate from "../../react-utils/animate";
import Draggable from "../../react-utils/draggable";
import cx from "classnames";
import styles from "./modal.scss";

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
        visible: PropTypes.bool,
        modalBackdrop: PropTypes.bool,
        children: PropTypes.node.isRequired,
        draggable: PropTypes.bool,
        scrollable: PropTypes.bool,
        transition: PropTypes.string,
    };

    static defaultProps = {
        type: "default",
        transition: "expandIn",
        saveText: "Speichern",
        closeText: "Abbrechen",
        visible: true,
        modalBackdrop: true,
        draggable: false,
        scrollable: false,
        size: "sm",
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
            children,
            draggable,
            scrollable,
            type,
            className,
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
                    {children}
                </div>
            </div>
        )
    }

    renderDragableWrapper() {
        return (
            <Draggable
                enabled
                handle={styles["modal-header"]}
            >
                {this.renderModalContent()}
            </Draggable>
        )
    }

    render() {
        const {visible, draggable, transition, modalBackdrop} = this.props;
        return (
            <div>
                <Animate transition={transition}>
                    <div
                        className={cx(styles.modal, (visible) && styles.show)}
                    >
                        {draggable ? this.renderDragableWrapper() : this.renderModalContent()}
                    </div>
                </Animate>
                {(!draggable && modalBackdrop) && <div className={cx(visible && styles["modal-backdrop"])}></div>}
            </div>
        );
    }
};