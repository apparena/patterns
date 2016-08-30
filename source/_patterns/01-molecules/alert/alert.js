import React, {PropTypes} from "react";
import ReactComponent from "../../reactComponent";
import cx from "classnames";

var ALERT_TYPES = [
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
        dismissable: PropTypes.bool,
    };

    static defaultProps = {
        dismissable: false,
        classNames: "",
    };

    renderButton() {
        if (this.props.dismissable) {
            return (
                <button type="button" className="close" data-dismiss="alert" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
            );
        }
    }

    render() {
        const classes = cx(
            'alert',
            'alert-' + this.props.type,
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