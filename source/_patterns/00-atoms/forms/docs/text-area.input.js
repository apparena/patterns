import React, { Component } from 'react';

export default class TextAreaInput extends Component {
    render () {
        return (
            <table className="table table-bordered table-inverse">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Type</th>
                        <th>Description</th>
                        <th>Default</th>
                        <th>Options</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>onChange</td>
                        <td>function</td>
                        <td>Add a function to the text area</td>
                        <td><em>undefinded</em></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>classNames</td>
                        <td>string</td>
                        <td>Give the text area some classnames</td>
                        <td><em>undefined</em></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>placeholder</td>
                        <td>string</td>
                        <td>Define a placeholder for the text area</td>
                        <td><em>undefinded</em></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>id</td>
                        <td>string</td>
                        <td>Give the text area an ID</td>
                        <td><em>undefinded</em></td>
                        <td />
                    </tr>
                </tbody>
            </table>
        );
    }
};