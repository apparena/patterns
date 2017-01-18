import React, {PropTypes} from "react";
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
            styles.fa,
            styles[`fa-${name}`],
            styles[`icon-${type}`],
            size && styles[`fa-${size}`],
            inverse && styles['fa-inverse'],
            flip && styles['fa-flip'],
            rotate && styles[`fa-rotate-${rotate}`],
            stack && styles[`fa-${flip}`],
            border && styles['fa-border'],
            pulse && styles['fa-pulse'],
            spin && styles['fa-spin'],
            fixedWidth && styles['fa-fw'],
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
