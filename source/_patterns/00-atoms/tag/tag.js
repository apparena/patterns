import React, {PropTypes} from "react";
import ReactComponent from "../../react-utils/component";
import cx from "classnames";
import styles from "./tag.scss";

const BUTTON_TYPES = [
    "default",
    "primary",
    "success",
    "info",
    "warning",
    "danger",
];

export default class Button extends ReactComponent {
    static propTypes = {
        className: PropTypes.string,
        type: PropTypes.oneOf(BUTTON_TYPES),
        pill: PropTypes.bool
    };
    static defaultProps = {
        type: 'default',
    };

    render() {
        // classes
        const componentClass = cx(
            styles.tag,
            styles['tag-' + this.props.type],
            this.props.pill && styles['tag-' + this.props.pill],
            this.props.className
        );

        return (
            <span
                className={componentClass}
            >
                {this.props.children}
            </span>
        );
    }
}