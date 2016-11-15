import React, {PropTypes} from "react";
import ReactComponent from "../../react-utils/component";
import cx from "classnames";
import styles from "./button.scss";
import Spinner from "../spinner/spinner";
import Icon from "../icons/icons";

const BUTTON_SIZES = ["lg", "sm", "xs"];

const BUTTON_STATES = ["default", "loading", "success", "error", "warning"];

const BUTTON_TYPES = [
    "default",
    "primary",
    "secondary",
    "success",
    "info",
    "warning",
    "danger",
    "link",
    "outline-primary",
    "outline-secondary",
    "outline-success",
    "outline-info",
    "outline-warning",
    "outline-danger",
];

export default class Button extends ReactComponent {
    static propTypes = {
        className: PropTypes.string,
        type: PropTypes.oneOf(BUTTON_TYPES),
        size: PropTypes.oneOf(BUTTON_SIZES),
        block: PropTypes.bool,
        href: PropTypes.string,
        isActive: PropTypes.bool,
        isDisabled: PropTypes.bool,
        onClick: PropTypes.func,
        submit: PropTypes.bool,
        state: PropTypes.oneOf(BUTTON_STATES),
    };
    static defaultProps = {
        type: "secondary",
        state: "default",
        isDisabled: false
    };

    renderState() {
        const {state, children, size} = this.props;
        switch (state) {
            case "loading":
                return (
                    <Spinner size={size} type="inverted"/>
                );
            case "success":
                return (
                    <Icon type="success" name="check"/>
                );
            case "error":
                return (
                    <Icon type="error" name="times"/>
                );
            default:
                return children;
        }
    }

    render() {
        const {
            type,
            state,
            size,
            block,
            isActive,
            className,
            href,
            children,
            onClick,
            isDisabled,
            submit,
        } = this.props;
        // classes
        const componentClass = cx(
            styles.btn,
            styles["btn-" + type],
            size && styles["btn-" + size],
            block && styles["btn-block"],
            isActive && styles["active"],
            isDisabled && styles["disabled"],
            className
        );

        if (href) {
            return (
                <a href={href} className={componentClass}>
                    {(state === "default") ? children : this.renderState()}
                </a>
            );
        }

        return (
            <button
                onClick={onClick}
                disabled={isDisabled || (state !== "default")}
                className={componentClass}
                type={submit ? "submit" : "button"}
            >
                {(state === "default") ? children : this.renderState()}
            </button>
        );
    }
}