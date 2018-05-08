import React from 'react';
import { ColorPicker } from 'apparena-patterns-react';

export default class FormColorExample extends React.Component {
  render() {
    return (
      <div>
        <ColorPicker />

        <ColorPicker displayColorPicker={false} />


      </div>
    );
  }
}
