import React, {PropTypes} from "react";
import cx from "classnames";
import ReactComponent from "../../react-utils/component";
import styles from "./progress-tracker-step.scss";

export default class ProgressTrackerStep extends ReactComponent {
    static propTypes = {
        className: PropTypes.string,
        active: PropTypes.bool,
        id: PropTypes.string,
        href: PropTypes.string,
        onClick: PropTypes.func,
        text: PropTypes.string,
    };

    static defaultProps = {
        active: false
    };

    render() {
        return (
            <li className={cx(styles["progress-tracker-step"], this.props.className, (this.props.active) ? styles["progress-tracker-step-active"] : '')}
                id={this.props.id}
                href={this.props.href}
                style={this.props.style}
                onClick={(this.props.onClick) ? this.props.onClick : null}
            >
                <span>{this.props.text}</span>
            </li>
        )
    }
}