import React, {PropTypes} from "react";
import ReactComponent from "../../react-utils/component";
import Tooltip from "../../01-molecules/tooltip/tooltip";
import cx from "classnames";
import Toggle from "react-toggle";
import styles from "./checkbox.scss";

export default class CheckboxComponent extends ReactComponent {
    static PropTypes = {
        className: PropTypes.string,
        disabled: PropTypes.bool,
        checked: PropTypes.bool,
        onChange: PropTypes.func.isRequired,
        id: PropTypes.string.isRequired
    };

    static defaultProps = {
        id: ''
    };

    render() {
        var id = this.props.id.replace("_", "");
        return (
            <div className={cx(styles.checkbox, this.props.className)}>
                <Tooltip
                    positioning="top center"
                    label={this.props.checked ? "Aktiviert" : "Deaktiviert"}
                >
                    <Toggle
                        id={id}
                        disabled={this.props.disabled}
                        checked={this.props.checked}
                        onChange={this.props.onChange}
                    />
                </Tooltip>
            </div>
        )
    }
}