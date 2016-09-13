import React, {PropTypes} from "react";
import ReactComponent from "../../react-utils/component";
import cx from "classnames";
import styles from "./notification.scss";
import Animate from "../../react-utils/animate";


export default class Notification extends ReactComponent {
    static propTypes = {
        header: PropTypes.string.isRequired,
        children: PropTypes.oneOfType([
            PropTypes.string,
            PropTypes.element,
            PropTypes.arrayOf(PropTypes.element)
        ]),
        type: PropTypes.oneOf(["info", "success", "warning", "danger"]).isRequired,
        duration: PropTypes.number,
        classNames: PropTypes.string,
        onClose: PropTypes.func
    };

    static defaultProps = {
        transition: "fadeIn",
        dismissible: false,
    };

    renderDismissibleIcon() {
        if (this.props.onClose) {
            return (
                <span className={cx("fa fa-times", styles.dismissibleIcon)} onClick={this.props.onClose}/>
            );
        }
    }

    render() {
        const {transition, classNames, type, header, children} = this.props;
        let iconClass = null;

        switch (this.props.type) {
            case 'info':
                iconClass = 'fa fa-info-circle';
                break;
            case 'success':
                iconClass = 'fa fa-check';
                break;
            case 'warning':
                iconClass = 'fa fa-exclamation-triangle';
                break;
            case 'danger':
                iconClass = 'fa fa-exclamation-circle';
                break;
            default:
                break;
        }

        return (
            <Animate transition={transition}>
                <div className={cx(classNames, styles.notif, styles[type])}>
                    <span className={cx(iconClass, styles.typeIcon)}/>
                    <strong>{header}</strong>
                    <div>{children}</div>
                    {this.renderDismissibleIcon()}
                </div>
            </Animate>
        );
    }
}
