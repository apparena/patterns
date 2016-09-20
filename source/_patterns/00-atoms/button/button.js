import React, {PropTypes} from "react";
import ReactComponent from "../../react-utils/component";
import cx from "classnames";
import styles from "../../../css/app-arena-styles.scss";

const BUTTON_SIZES = ["lg", "sm", "xs"];

const BUTTON_TYPES = [
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
        block: PropTypes.bool,
        className: PropTypes.string,
        children: PropTypes.oneOfType([
            PropTypes.string,
            PropTypes.element
        ]),
        href: PropTypes.string,
        isActive: PropTypes.bool,
        isDisabled: PropTypes.bool,
        onClick: PropTypes.func,
        size: PropTypes.oneOf(BUTTON_SIZES),
        submit: PropTypes.bool,
        type: PropTypes.oneOf(BUTTON_TYPES)
    };
    static defaultProps = {
        type: 'secondary',
    };

    render() {
        // classes
        const componentClass = cx(
            styles.btn,
            styles['btn-' + this.props.type],
            this.props.size && styles['btn-' + this.props.size],
            {
                'btn-block': this.props.block,
                'active': this.props.isActive,
                'disabled': this.props.isDisabled,
            },
            this.props.className
        );

        if (this.props.href) {
            return (
                <a href={this.props.href} className={componentClass}>{this.props.children}</a>
            );
        }

        return (
            <button
                onClick={this.props.onClick}
                className={componentClass}
                type={this.props.submit ? 'submit' : 'button'}
            >
                {this.props.children}
            </button>
        );
    }
}