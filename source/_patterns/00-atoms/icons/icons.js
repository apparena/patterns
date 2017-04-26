import React from "react";
import PropTypes from "prop-types";
import ReactComponent from "../../react-utils/component";
import cx from "classnames";
import styles from "./icons.scss";

const ICON_TYPES = [
    "default",
    "primary",
    "secondary",
    "success",
    "info",
    "warning",
    "danger",
];

export default class Icon extends ReactComponent {
    static   PropTypes = {
        type: PropTypes.oneOf(ICON_TYPES),
        border: PropTypes.bool,
        className: PropTypes.string,
        fixedWidth: PropTypes.bool,
        flip: PropTypes.oneOf(['horizontal', 'vertical']),
        inverse: PropTypes.bool,
        name: PropTypes.string.isRequired,
        pulse: PropTypes.bool,
        rotate: PropTypes.oneOf([90, 180, 270]),
        size: PropTypes.oneOf(['lg', '2x', '3x', '4x', '5x']),
        spin: PropTypes.bool,
        stack: PropTypes.oneOf(['1x', '2x']),
    };

    render() {
        const {
            name,
            type,
            size,
            inverse,
            flip,
            rotate,
            stack,
            border,
            pulse,
            spin,
            fixedWidth,
            className,
            ...props
        } = this.props;
        // classes
        const componentClass = cx(
            styles.aaIcon,
            styles[`aa-icon-${name}`],
            styles[`icon-${type}`],
            size && styles[`aa-icon-${size}`],
            inverse && styles['aa-icon-inverse'],
            flip && styles['aa-icon-flip'],
            rotate && styles[`aa-icon-rotate-${rotate}`],
            stack && styles[`aa-icon-${flip}`],
            border && styles['aa-icon-border'],
            pulse && styles['aa-icon-pulse'],
            spin && styles['aa-icon-spin'],
            fixedWidth && styles['aa-icon-fw'],
            className
        );

        return (
            <i
                {...props}
                className={componentClass}
            />
        )
    }
}
