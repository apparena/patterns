import React from 'react';
import { CustomControl } from 'apparena-patterns-react';

export default class FormCustomControlExample extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = { clickHandlerText: '' };
  }

  /*
   * Receives the state of the checkbox
   */
  handleClick(state) {
    this.setState({
      clickHandlerText: `Checkbox is ${state.checked ? 'checked' : 'not checked'}`,
    });
  }

  render() {
    return (
      <div>
        <h3>Checkboxes</h3>
        <CustomControl
          label="Simple Checkbox"
          name="simple-checkbox"
          type="checkbox"
          value="off"
        />
        <CustomControl
          checked
          label="Simple Checkbox checked"
          name="simple-checkbox-checked"
          type="checkbox"
          value="on"
        />
        <CustomControl
          checked
          disabled
          label="Simple Checkbox disabled"
          name="simple-checkbox-disabled"
          type="checkbox"
          value="on"
        />
        <CustomControl
          checked
          label="Simple Checkbox with click handler"
          name="simple-checkbox-clickHandler"
          type="checkbox"
          onChange={this.handleClick.bind(this)}
        />
          <input className="form-control" type="text" value={this.state.clickHandlerText} />
          <CustomControl
              checked
              label="Invalid"
              name="test5"
              validationState="invalid"
              type="checkbox"
          />
          <CustomControl
              checked
              label="Valid"
              name="test6"
              validationState="valid"
              type="checkbox"
          />


        <hr />

        <h3>Radio buttons</h3>
        <CustomControl
          label="Simple Radio"
          name="simple-radio"
          type="radio"
          value="off"
        />
        <CustomControl
          checked
          label="Simple Radio checked"
          name="simple-radio-checked"
          type="radio"
          value="on"
        />
        <CustomControl
          checked
          disabled
          label="Simple Radio disabled"
          name="simple-radio-disabled"
          type="radio"
          value="on"
        />
          <CustomControl
              checked
              label="Invalid"
              name="test5"
              validationState="invalid"
              type="radio"
          />
          <CustomControl
              checked
              label="Valid"
              name="test6"
              validationState="valid"
              type="radio"
          />
      </div>
    );
  }
}
