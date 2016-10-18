import React, {PropTypes} from "react";
import ReactComponent from "../../react-utils/component";
import cx from "classnames";
import styles from "./notification.scss";
import Animate from "../../react-utils/animate";
import Icon from "../../00-atoms/icons/icons";

const typeIcons = {
    "info": "info-circle",
    "success": "check",
    "warning": "exclamation-triangle",
    "danger": "exclamation-circle"
};

export default class Notification extends ReactComponent {
    static propTypes = {
        header: PropTypes.string.isRequired,
        children: PropTypes.node,
        type: PropTypes.oneOf(["info", "success", "warning", "danger"]).isRequired,
        duration: PropTypes.number,
        className: PropTypes.string,
        onClose: PropTypes.func,
        fixed: PropTypes.bool,
        dismissible: PropTypes.bool
    };

    static defaultProps = {
        transition: "slideDownIn",
        dismissible: false,
        fixed: true,
    };

    renderDismissibleIcon() {
        if (this.props.onClose) {
            return (
                <Icon name={"times"} className={styles.close} onClick={this.props.onClose}/>
            );
        }
    }

    render() {
        const {transition, className, type, header, children, fixed} = this.props;
        let iconName = typeIcons[type];

        return (
            <Animate transition={transition}>
                <div className={cx(styles["m-notification"], fixed && styles.fixed, className)}>
                    <div className={cx(styles.content, styles[type])}>
                        {this.renderDismissibleIcon()}
                        <Icon name={iconName} className={styles.icon}/>
                        <div className={cx(styles["title-messages"])}>
                            <strong>{header}</strong> {children}
                        </div>
                    </div>
                </div>
            </Animate>
        );
    }
}
