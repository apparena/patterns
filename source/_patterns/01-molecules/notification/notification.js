import React, {PropTypes} from "react";
import ReactComponent from "../../reactComponent";
import ReactDOM from "react-dom";
import cx from "classnames";
import Portal from "../../react-utils/portal";
import Stick from "../../react-utils/stick";
import styles from "./notification.scss"

export default class Notification extends ReactComponent {
    static propTypes = {
        header: PropTypes.string.isRequired,
        content: PropTypes.string.isRequired,
        type: PropTypes.oneOf(["info", "success", "warning", "danger"]).isRequired,
        duration: PropTypes.oneOf(['short', 'fast', 'medium', 'slow', 'long']),
    };

    static defaultProps = {
        duration: 'fast',
    };


    getInitState() {
        return {
            visible: this.props.visible,
        };
    }

    componentWillReceiveProps(nextProps, nextContext) {
        this.setState({visible: nextProps.visible});
    }


    render() {
        let iconClass = null;
        let durationClass = null;

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
                iconClass = cx('fa fa-exclamation', styles.dangerCorrection);
                break;
            default:
                break;
        }
        switch (this.props.duration) {
            case 'short':
            case 'fast':
                durationClass = 'animate-fast';
                break;
            case 'slow':
            case 'long':
                durationClass = 'animate-slow';
                break;
            case 'medium':
                durationClass = 'animate-medium';
                break;
            default:
                durationClass = 'animate-medium';
                break;
        }

        return (
            <Portal>
                <div className={cx(styles.notif, (this.state.visible)?styles.visible:styles.invisible, styles[this.props.type], styles[durationClass])}>
                    <span className={cx(iconClass, styles.typeIcon)} />
                    <strong>{this.props.header}</strong>
                    <p>{this.props.content}</p>
                    <span className={cx("fa fa-times", styles.dismissableIcon)} onClick={() => this.setState({visible: false})} />
                </div>
            </Portal>
        );
    }
}
