import React from 'react';
import { Alert, Input } from 'apparena-patterns-react';

export default class FormCustomControlExample extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = { changedElementValue: '' };
  }

  /**
     * Receives the state of the checkbox
     * @param {SyntheticEvent} event The react `SyntheticEvent`
     */
  handleChange(event) {
    this.setState({
      changedElementValue: `Input with name <strong>${event.target.name}</strong> has changed its value to '${event.target.value}'`,
    });
  }

  render() {
    return (
      <div>
        <h3>Checkboxes</h3>

        <Input
          name="input-placeholder"
          placeholder="Input with placeholder"
          onChange={this.handleChange.bind(this)}
        />


        <Input
          name="input-value"
          defaultValue="Input with value"
          onChange={this.handleChange.bind(this)}
        />

        <Input
          icon="icon icon-search"
          name="input-icon"
          placeholder="Input with icon"
          onChange={this.handleChange.bind(this)}
        />

        <hr />

        <Alert type="info">
          <h5>Output</h5>
          <p>
            {this.state.changedElementValue}
          </p>
        </Alert>

      </div>
    );
  }
}
