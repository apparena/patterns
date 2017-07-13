import React from 'react';
import {ReactComponent, Table} from "apparena-patterns-react";

export default class SpinnerInput extends ReactComponent {
    render () {
        return (
            <Table bordered inverse>
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
                        <td>className</td>
                        <td>string</td>
                        <td>Give the table a className </td>
                        <td><em>undefinded</em></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>size</td>
                        <td>oneOf</td>
                        <td>Select a size for the spinner</td>
                        <td>sm, md, lg</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>type</td>
                        <td>one of</td>
                        <td>Select the type of your Spinner</td>
                        <td>default</td>
                        <td>default, primary, secondary, success, info, warning, danger, link, outline-primary, outline-secondary, outline-success, outline-info, outline-warning, outline-danger, inverted</td>
                    </tr>
                </tbody>
            </Table>
        );
    }
};