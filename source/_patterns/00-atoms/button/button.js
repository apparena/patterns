import React, {PropTypes} from "react";
import ReactComponent from "../../react-utils/component";
import cx from "classnames";
import styles from "../../../css/app-arena-styles.scss"

const BUTTON_SIZES = ['lg', 'sm', 'xs'];

const BUTTON_TYPES = [
    'default',
    'default-primary',
    'default-success',
    'default-warning',
    'default-danger',
    'hollow-primary',
    'hollow-success',
    'hollow-warning',
    'hollow-danger',
    'primary',
    'success',
    'warning',
    'danger',
    'link',
    'link-text',
    'link-primary',
    'link-success',
    'link-warning',
    'link-danger',
    'link-cancel',
    'link-delete',
];

export default class Button extends ReactComponent {
    static propTypes = {
        block: PropTypes.bool,
        className: PropTypes.string,
        children: PropTypes.string,
        href: PropTypes.string,
        isActive: PropTypes.bool,
        onClick:PropTypes.func,
        size: PropTypes.oneOf(BUTTON_SIZES),
        submit: PropTypes.bool,
        type: PropTypes.oneOf(BUTTON_TYPES),
    };
    static defaultProps = {
        type: 'default',
    };

    render() {
        // classes
        const componentClass = cx(
            styles.btn,
            styles['btn-' + this.props.type],
            this.props.size && styles['btn-' + this.props.size],
            {
                'btn-block': this.props.block,
                'is-active': this.props.isActive,
            },
            this.props.className
        );

        if (this.props.href) {
            return (
                <a href={this.props.href} className={componentClass}>{this.props.children}</a>
            );
        }

        return (
            <button onClick={this.props.onClick} className={componentClass} type={this.props.submit ? 'submit' : 'button'}>
                {this.props.children}
            </button>
        );
    }
}