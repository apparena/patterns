import React from 'react';
import PropTypes from 'prop-types';
import ReactComponent from '../../react-utils/component';
import cx from 'classnames';
import styles from './button.scss';
import Spinner from '../spinner/spinner';
import Icon from '../icons';

const BUTTON_SIZES = ['lg', 'sm', 'xs'];

const BUTTON_STATES = ['default', 'loading', 'success', 'error', 'warning'];

const BUTTON_TYPES = [
    'default',
    'primary',
    'secondary',
    'success',
    'info',
    'warning',
    'danger',
    'link',
    'outline-primary',
    'outline-secondary',
    'outline-success',
    'outline-info',
    'outline-warning',
    'outline-danger'
];

const SPINNER_TYPES = {
    default: 'primary',
    primary: 'inverted',
    secondary: 'inverted',
    success: 'inverted',
    info: 'inverted',
    warning: 'inverted',
    danger: 'inverted',
    link: 'primary',
    'outline-primary': 'primary',
    'outline-secondary': 'secondary',
    'outline-success': 'success',
    'outline-info': 'info',
    'outline-warning': 'warning',
    'outline-danger': 'danger'
};

export default class Button extends ReactComponent {
    static propTypes = {
        /**
         * The CSS className for this component
         */
        className: PropTypes.string,
        /**
         * Determines the default styling of the button
         */
        type: PropTypes.oneOf(BUTTON_TYPES),
        /**
         * Sets the size of the button
         */
        size: PropTypes.oneOf(BUTTON_SIZES),
        /**
         * Set the target prop for the <a> tag
         */
        target: PropTypes.oneOf(['blank', 'top', 'self']),
        /**
         * Display the button as a block?
         */
        block: PropTypes.bool,
        /**
         * Use rounded edges for the button?
         */
        rounded: PropTypes.bool,
        /**
         * URL to redirect to on click. Will render a <a> tag instead of a <button> tag.
         */
        href: PropTypes.string,
        /**
         * The DOM elements ID.
         */
        id: PropTypes.string,
        /**
         * Set the button as active?
         */
        isActive: PropTypes.bool,
        /**
         * Should the button be disabled?
         */
        isDisabled: PropTypes.bool,
        /**
         * Function that's executed when someone clicks the button
         */
        onClick: PropTypes.func,
        /**
         * Should the button be a submit button instead?
         */
        submit: PropTypes.bool,
        /**
         * Sets the state of the button.
         */
        state: PropTypes.oneOf(BUTTON_STATES)
    };
    static defaultProps = {
        type: 'secondary',
        state: 'default',
        isDisabled: false
    };

    getInitState() {
        this.refBind = ::this.ref;
    }

    componentDidMount() {
        this.setButtonWidth(this.props.state);
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.state !== this.props.state) {
            this.setButtonWidth(nextProps.state);
        }
    }

    setButtonWidth(state) {
        if (state === 'default' && this.button) {
            this.btnWidth = this.button.getBoundingClientRect().width;
        }
    }

    ref(node) {
        this.button = node;
    }

    renderState() {
        const {state, children, type} = this.props;
        switch (state) {
            case 'loading':
                return (
                    <Spinner size="sm" type={SPINNER_TYPES[type]}/>
                );
            case 'success':
                return (
                    <Icon type="success" name="check"/>
                );
            case 'error':
                return (
                    <Icon type="error" name="close"/>
                );
            default:
                return children;
        }
    }

    render() {
        const {
            block,
            children,
            className,
            href,
            id,
            isActive,
            isDisabled,
            onClick,
            rounded,
            size,
            state,
            submit,
            target,
            type,
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

        // If a link is available, then render the button as A tag
        if (href) {
            return (
                <a
                    className={componentClass}
                    href={href}
                    id={id}
                    ref={this.refBind}
                    style={style}
                    target={`_${target}`}
                >
                    {(state === 'default') ? children : this.renderState()}
                </a>
            );
        }
        return (
            <button
                className={componentClass}
                disabled={isDisabled || (state !== 'default')}
                id={id}
                onClick={onClick}
                ref={this.refBind}
                role="button"
                style={style}
                type={submit ? 'submit' : 'button'}
            >
                {(state === 'default') ? children : this.renderState()}
            </button>
        );
    }
}