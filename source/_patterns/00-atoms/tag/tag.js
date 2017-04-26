import React from "react";
import PropTypes from "prop-types";
import ReactComponent from "../../react-utils/component";
import cx from "classnames";
import styles from "./tag.scss";

const TAG_TYPES = [
    "default",
    "primary",
    "success",
    "info",
    "warning",
    "danger",
];

export default class Tag extends ReactComponent {
    static propTypes = {
        className: PropTypes.string,
        type: PropTypes.oneOf(TAG_TYPES),
        pill: PropTypes.bool
    };
    static defaultProps = {
        type: 'default',
    };

    render() {
        // classes
        const componentClass = cx(
            styles.badge,
            styles[`badge-${this.props.type}`],
            this.props.pill && styles['badge-pill'],
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