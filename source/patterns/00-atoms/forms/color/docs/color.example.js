import React from 'react';
import { ColorPicker } from 'apparena-patterns-react';

export default class FormColorExample extends React.Component {


  getInitialState() {
    return {
      color1: '#CCFFCC',
      displayPicker: true,
      onChange(event) {
        console.log(event);
      },
      onClick(event) {
        console.log(event);
      },
      onInputChange(event) {
        console.log(event);
      },
      onSubmit(event) {
        console.log(event);
      },
    };
}


  render() {
    return (
      <div>
        <ColorPicker
          name="color1"
          value={this.state.color1 || ''}
          onChange={this.state.onChange}
          displayColorPicker={this.state.displayPicker}
          onInputChange={this.onInputChange}
          onSubmit={this.onSubmit}
          handleClick={this.onClick}
        />

        <ColorPicker displayColorPicker={false} />


      </div>
    );
  }
}
