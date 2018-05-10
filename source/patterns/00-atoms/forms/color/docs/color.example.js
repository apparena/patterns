import React from 'react';
import { ColorPicker } from 'apparena-patterns-react';

export default class FormColorExample extends React.Component {


  getInitialState() {
    return {
      color1: '#CCFFCC',
      onChange(hex) {
        this.state.color1 = hex;
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
          displayColorPicker={this.state.displayColorPicker1}
          onInputChange={this.onColorChange1}
          onSubmit={this.onColorSubmit1}
          handleClick={this.showColorPicker1}
        />

        <ColorPicker displayColorPicker={false} />


      </div>
    );
  }
}
