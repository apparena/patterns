import React, {PropTypes} from "react";
import ReactComponent from "../../react-utils/component";
import cx from "classnames";
import {SingleDatePicker} from "react-dates";
import styles from "./index.scss";

export default class DatePicker extends ReactComponent {
    static propTypes = {
        date: PropTypes.object.isRequired,
        focused: PropTypes.bool.isRequired,
        id: PropTypes.string,
        monthFormat: PropTypes.string,
        onChange: PropTypes.func.isRequired,
        onFocusChange: PropTypes.func.isRequired,
        isOutsideRange: PropTypes.func,
    };

    static defaultProps = {
        id: "datePicker",
        focused: false,
        monthFormat: "DD.MM.YYYY",
        isOutsideRange: () => false
    };

    getInitState() {
        this.handleClose = ::this.handleClose;
    }

    handleClose() {
        if (this.props.onFocusChange){
            this.props.onFocusChange(false);
        }
    }

    render() {
        const {id, date, focused, onChange, onFocusChange, isOutsideRange, monthFormat, ...props} = this.props;
        return (
            <div className={cx(styles.root)}>
                <SingleDatePicker
                    {...props}
                    id={id}
                    monthFormat={monthFormat}
                    displayFormat={monthFormat}
                    date={date}
                    focused={focused}
                    onDateChange={onChange}
                    onFocusChange={onFocusChange}
                    isOutsideRange={isOutsideRange}
                />
                <div className={cx(focused && styles.underlay)} onClick={this.handleClose} />
            </div>
        )
    }
}