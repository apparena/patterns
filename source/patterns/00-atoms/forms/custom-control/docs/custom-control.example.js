import React from 'react';
import { CustomControl, Input } from 'apparena-patterns-react';

export default class FormCustomControlExample extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = { clickHandlerText: '' };
  }

  /**
   * Receives the state of the checkbox
   * @param {SyntheticEvent} event The react `SyntheticEvent`
   */
  handleCheckboxChange(event) {
    this.setState({
      clickHandlerText: `Checkbox with id ${event.target.id} is ${event.target.checked ? 'checked' : 'not checked'}`,
    });
  }

  render() {
    return (
      <div>
        <h3>Checkboxes</h3>

        <Input
          name="clickHandlerText"
          value={this.state.clickHandlerText}
        />

        <CustomControl
          label="Simple Checkbox"
          id="simple-checkbox"
          name="simple-checkbox"
          type="checkbox"
          value="off"
          onChange={this.handleCheckboxChange.bind(this)}
        />
        <CustomControl
          checked
          label="Simple Checkbox checked"
          id="simple-checkbox-checked"
          name="simple-checkbox-checked"
          type="checkbox"
          value="on"
          onChange={this.handleCheckboxChange.bind(this)}
        />
        <CustomControl
          checked
          disabled
          label="Simple Checkbox disabled"
          name="simple-checkbox-disabled"
          id="simple-checkbox-disabled"
          type="checkbox"
          value="on"
          onChange={this.handleCheckboxChange.bind(this)}
        />


        <CustomControl
          checked
          label="validationState 'invalid'"
          id="test5"
          name="test5"
          validationState="invalid"
          type="checkbox"
          onChange={this.handleCheckboxChange.bind(this)}
        />
        <CustomControl
          checked
          label="validationState 'valid'"
          id="test6"
          name="test6"
          validationState="valid"
          type="checkbox"
          onChange={this.handleCheckboxChange.bind(this)}
        />


        <hr />

        <h3>Radio buttons</h3>
        <CustomControl
          label="Simple Radio"
          id="simple-radio"
          name="simple-radio"
          type="radio"
          value="off"
          onChange={this.handleCheckboxChange.bind(this)}
        />
        <CustomControl
          checked
          label="Simple Radio checked"
          id="simple-radio-checked"
          name="simple-radio-checked"
          type="radio"
          value="on"
          onChange={this.handleCheckboxChange.bind(this)}
        />
        <CustomControl
          checked
          disabled
          label="Simple Radio disabled"
          id="simple-radio-disabled"
          name="simple-radio-disabled"
          type="radio"
          value="on"
          onChange={this.handleCheckboxChange.bind(this)}
        />
        <CustomControl
          checked
          label="Invalid"
          id="radio-invalid"
          name="radio-invalid"
          validationState="invalid"
          type="radio"
          onChange={this.handleCheckboxChange.bind(this)}
        />
        <CustomControl
          checked
          label="Valid"
          id="radio-valid"
          name="radio-valid"
          validationState="valid"
          type="radio"
          onChange={this.handleCheckboxChange.bind(this)}
        />
      </div>
    );
  }
}
