import React, {PropTypes} from "react";
import ReactComponent from "../../reactComponent";
import {findDOMNode} from "react-dom";
import cx from "classnames";
import Portal from "../../react-utils/portal";
import styles from "./notification.scss"
import velocity from "velocity-animate";


export default class Notification extends ReactComponent {
    static propTypes = {
        header: PropTypes.string.isRequired,
        content: PropTypes.string.isRequired,
        type: PropTypes.oneOf(["info", "success", "warning", "danger"]).isRequired,
        duration: PropTypes.number,
        dismissible: PropTypes.bool,
    };

    static defaultProps = {
        duration: 5000,
        dismissible: false,
    };


    getInitState() {
        return {
            visible: this.props.visible,
        };
    }

    componentWillReceiveProps(nextProps, nextContext) {
        if (!this.props.dismissible && !this.state.visible){
            this.setState({visible: nextProps.visible});
            velocity(findDOMNode(this._notif), {top: 20}, {duration: 800});
            setTimeout(() => {
                velocity(findDOMNode(this._notif), {top: -100}, {duration: 800});
                this.setState({visible: false});
            }, this.props.duration);
        }
        else if (this.props.dismissible && !this.state.visisble) {
            this.setState({visible: nextProps.visible});
            velocity(findDOMNode(this._notif), {top: 20}, {duration: 800});
        }
    }

    renderDismissibleIcon() {
        if (this.props.dismissible) return (
            <span className={cx("fa fa-times", styles.dismissibleIcon)} onClick={() => {
                velocity(findDOMNode(this._notif), {top: -100}, {duration: 800});
                this.setState({visible: false});
            }} />
        );
    }

    render() {
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
            <Portal>
                <div className={cx(styles.notif, styles[this.props.type])} ref={(c) => {this._notif = c}} >
                    <span className={cx(iconClass, styles.typeIcon)} />
                    <strong>{this.props.header}</strong>
                    <p>{this.props.content}</p>
                    {this.renderDismissibleIcon()}
                </div>
            </Portal>
        );
    }
}
