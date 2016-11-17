import React from "react";
import ReactComponent from "../../react-utils/component";
import cx from "classnames";
import styles from "./pill.scss";
import Icon from "../icons/icons";

var PILL_TYPES = [
    'default',
    'danger',
    'info',
    'primary',
    'success',
    'warning'
];

export default class Pill extends ReactComponent {
    static propTypes = {
        className: React.PropTypes.string,
        label: React.PropTypes.string.isRequired,
        onClear: React.PropTypes.func,
        onClick: React.PropTypes.func,
        type: React.PropTypes.oneOf(PILL_TYPES)
    };

    static defaultProps = {
        type: 'default'
    };

    renderClearButton() {
        if (!this.props.onClear) return null;
        return (
            <button type="button" onClick={this.props.onClear} className={styles["pill-clear"]}>
                <Icon name="times"/>
            </button>
        );
    }

    render() {
        const {type, onClick, className, label, ...props} = this.props;
        props.className = cx(
            styles.pill,
            styles[`pill-${type}`],
            className
        );

        return (
            <div {...props}>
                <button type="button" onClick={onClick} className={styles["pill-label"]}>{label}</button>
                {this.renderClearButton()}
            </div>
        );
    }
}