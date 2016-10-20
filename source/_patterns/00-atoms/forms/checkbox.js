import React, {PropTypes} from "react";
import ReactComponent from "../../react-utils/component";
import Tooltip from "../../01-molecules/tooltip/tooltip";
import cx from "classnames";
import Toggle from "react-toggle";
import styles from "./checkbox.scss";

export default class Checkbox extends ReactComponent {
    static PropTypes = {
        className: PropTypes.string,
        zIndex: PropTypes.number,
        disabled: PropTypes.bool,
        checked: PropTypes.bool,
        onChange: PropTypes.func.isRequired,
        id: PropTypes.string,
        positioning: PropTypes.oneOf([
            'top',
            'bottom',
            'left',
            'right',
            'top left',
            'top center',
            'top right',
            'right top',
            'right middle',
            'right bottom',
            'bottom right',
            'bottom center',
            'bottom left',
            'left top',
            'left middle',
            'left bottom'
        ]),
    };

    static defaultProps = {
        id: '',
        positioning: "top center"
    };

    render() {
        const {id, className, positioning, checked, disabled, onChange, zIndex} = this.props;
        var cId = id.replace("_", "");
        return (
            <div className={cx(styles.checkbox, className)}>
                <Tooltip
                    zIndex={zIndex}
                    positioning={positioning}
                    label={checked ? "Aktiviert" : "Deaktiviert"}
                >
                    <Toggle
                        id={cId}
                        disabled={disabled}
                        checked={checked}
                        onChange={onChange}
                    />
                </Tooltip>
            </div>
        )
    }
}