import React from 'react';
import { ColorPicker } from 'apparena-patterns-react';

export default class FormColorExample extends React.Component {
  render() {
    return (
      <div>
        <ColorPicker />

        <ColorPicker displayColorPicker={false} />

        <ColorPicker presetColors={['#ff0000', '#00ff00']} />

        <ColorPicker value="#0000ff" />

        <ColorPicker showOnlyPicker />
      </div>
    );
  }
}
