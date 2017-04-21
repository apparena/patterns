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
        target: PropTypes.oneOf(["blank", "top", "self"]),
        block: PropTypes.bool,
        rounded: PropTypes.bool,
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
        stateType: "inverted",
        isDisabled: false
    };

    getInitState() {
        this.refBind = ::this.ref;
    }

    componentDidMount() {
        this.setButtonWidth(this.props.state)
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.state !== this.props.state) {
            this.setButtonWidth(nextProps.state)
        }
    }

    setButtonWidth(state) {
        if (state === "default" && this.button) {
            this.btnWidth = this.button.getBoundingClientRect().width;
        }
    }

    ref(node) {
        this.button = node
    }

    renderState() {
        const {state, children, type} = this.props;
        switch (state) {
            case "loading":
                return (
                    <Spinner size="sm" type={type}/>
                );
            case "success":
                return (
                    <Icon type="success" name="check"/>
                );
            case "error":
                return (
                    <Icon type="error" name="close"/>
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
            target,
            submit,
            rounded,
        } = this.props;
        // classes
        const componentClass = cx(
            styles.btn,
            styles[`btn-${type}`],
            size && styles[`btn-${size}`],
            block && styles['btn-block'],
            isActive && styles['active'],
            isDisabled && styles['disabled'],
            rounded && styles['btn-rounded'],
            className
        );
        const style = (state !== 'default' && this.btnWidth) ? {width: `${this.btnWidth}px`} : {};
        if (href) {
            return (
                <a
                    ref={this.refBind}
                    style={style}
                    href={href}
                    className={componentClass}
                    target={`_${target}`}
                >
                    {(state === 'default') ? children : this.renderState()}
                </a>
            );
        }
        return (
            <button
                role="button"
                ref={this.refBind}
                style={style}
                onClick={onClick}
                disabled={isDisabled || (state !== 'default')}
                className={componentClass}
                type={submit ? 'submit' : 'button'}
            >
                {(state === 'default') ? children : this.renderState()}
            </button>
        );
    }
}