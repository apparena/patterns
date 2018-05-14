import React from 'react';
import { DatePicker, ReactComponent } from 'apparena-patterns-react';
import moment from 'moment';

export default class DatepickerExample extends ReactComponent {

  getInitState() {
    return {
      date: moment('2019-01-01'),
      focused: false
    }
  }

  render() {
    return [
      <DatePicker
        id="expiryDate"
        date={this.state.date} // momentPropTypes.momentObj or null
        onChange={date => this.setState({ date })}
        focused={this.state.focused}
        onFocusChange={({ focused }) => this.setState({ focused })}
      />,
    ];
  }
}
