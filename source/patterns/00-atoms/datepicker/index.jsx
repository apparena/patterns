import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import 'react-dates/initialize';
import SingleDatePicker from 'react-dates/lib/components/SingleDatePicker';
import ReactComponent from '../../react-utils/component/index';
import styles from './index.scss';

export default class DatePicker extends ReactComponent {
  getInitState() {
    this.handleClose = this.handleClose.bind(this);
  }

  handleClose() {
    if (this.props.onFocusChange) {
      this.props.onFocusChange(false);
    }
  }

  render() {
    const {
      id, date, focused, onChange, onFocusChange, isOutsideRange, monthFormat, ...props
    } = this.props;
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
    );
  }
}

DatePicker.propTypes = {
  date: PropTypes.object.isRequired,
  focused: PropTypes.bool.isRequired,
  id: PropTypes.string,
  monthFormat: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  onFocusChange: PropTypes.func.isRequired,
  isOutsideRange: PropTypes.func,
};

DatePicker.defaultProps = {
  id: 'datePicker',
  focused: false,
  monthFormat: 'DD.MM.YYYY',
  isOutsideRange: () => false,
};
