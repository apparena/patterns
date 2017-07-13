import React, { Component } from 'react';

class test extends Component {
    render () {
      return (
        <table className="table table-bordered table-inverse">
          <thead>
            <tr>
              <th>Name</th>
              <th>Type</th>
              <th>Description</th>
              <th>Options</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>type</td>
              <td>oneOf</td>
              <td>Sets the type of the button</td>
              <td>default, primary, secondary, success, info, warning, danger, link, outline-primary, outline-secondary, outline-success, outline-info, outline-warning, outline-danger</td>
            </tr>
            <tr>
              <td>size</td>
              <td>oneOf</td>
              <td>Sets the size of the button</td>
              <td>lg, sm, xs</td>
            </tr>
            <tr>
              <td>target</td>
              <td>oneOf</td>
              <td>Sets the ??? of the button</td>
              <td>blank, top, self</td>
            </tr>
            <tr>
              <td>block</td>
              <td>boolean</td>
              <td>Sets the ??? of the button</td>
              <td />
          </tr>
          <tr>
            <td>rounded</td>
            <td>boolean</td>
            <td>Sets if the button should have rounded corners or not</td>
            <td />
          </tr>
          <tr>
            <td>href</td>
            <td>string</td>
            <td>Sets a reference to the button</td>
            <td />
          </tr>
          <tr>
            <td>isActive</td>
            <td>boolean</td>
            <td>Sets if the button should be active or not</td>
            <td />
          </tr>
          <tr>
            <td>isDisabled</td>
            <td>boolean</td>
            <td>Sets if the button should be disabled or not</td>
            <td />
          </tr>
          <tr>
            <td>onClick</td>
            <td>function</td>
            <td>Connects a function to the button</td>
          <td />
          </tr>
          <tr>
            <td>submit</td>
            <td>boolean</td>
            <td>Sets if the button should submit something or not</td>
            <td />
          </tr>
          <tr>
            <td>state</td>
            <td>oneOf</td>
            <td>Sets the state of the button</td>
            <td>default, loading, success, error, warning</td>
          </tr>
        </tbody>
      </table>
    );
  }
};

export default test;