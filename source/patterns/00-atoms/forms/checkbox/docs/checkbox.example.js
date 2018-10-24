import React from 'react';
import { Checkbox, ReactComponent } from 'apparena-patterns-react';

export default class CheckboxExample extends ReactComponent {
  getInitState() {
    return {
      checked1: false,
      checked2: false
    };
  }

  handleCheckbox(event) {
    this.setState({
      [`checked${event.target.name}`]: event.target.checked
    });
  }

  render() {
    return [
      <Checkbox
        onChange={this.handleCheckbox.bind(this)}
        checked={this.state.checked1}
        renderTooltip={false}
        name="1"
        key="1"
      />,
      <Checkbox
        onChange={this.handleCheckbox.bind(this)}
        checked={this.state.checked2}
        name="2"
        key="2"
        renderTooltip
        positioning="right"
      />,
    ];
  }
}
