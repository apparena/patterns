import React, {PropTypes} from "react";
import ReactComponent from "../../../react-utils/component";
import cx from "classnames";

const ALERT_TYPES = [
    "danger",
    "info",
    "success",
    "warning",
];

export default class Alert extends ReactComponent {
    static propTypes = {
        text: PropTypes.string.isRequired,
        type: PropTypes.oneOf(ALERT_TYPES).isRequired,
        classNames: PropTypes.string,
        dismissible: PropTypes.bool,
    };

    static defaultProps = {
        dismissible: false,
        classNames: "",
    };

    renderButton() {
        if (this.props.dismissible) {
            return (
                <button type="button" className="close">
                    <span>&times;</span>
                </button>
            );
        }
    }

    render() {
        const classes = cx(
            'alert',
            `alert-${this.props.type}`,
            this.props.classNames
        );

        return (
            <div className={classes}>
                {this.props.text}
                {this.renderButton()}
            </div>
        );
    }
}