import React from 'react';
import { Dropdown, ReactComponent } from 'apparena-patterns-react';

export default class DropdownExample extends ReactComponent {
  getInitState() {
    return {
      selection: 0,
    };
  }

  setSelection(selection) {
    this.setState({
      selection,
    });
  }

  render() {
    return [
      <Dropdown
        buttonSize="lg"
        arrow
        items={[
          <span value={1}>Item #1</span>,
          <span value={2}>Item #2</span>,
          <span value={3}>Item #3</span>
        ]}
        onSelect={this.setSelection.bind(this)}
      >
        <p>Please select an item</p>
      </Dropdown>,
      <p>{this.state.selection > 0 && `Selected item: Item #${this.state.selection}`}</p>,
    ];
  }
}
