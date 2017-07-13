import React from 'react';
import {ReactComponent, Table} from "apparena-patterns-react";

export default class RadioButtonInput extends ReactComponent {
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
                        <td>
                            onClick
                            <span className="badge badge-warning">
                                Required
                            </span>
                        </td>
                        <td>function</td>
                        <td>Add a function to the radio button</td>
                        <td><em>undefinded</em></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>text</td>
                        <td>string</td>
                        <td>Give the radio button some text</td>
                        <td>identifier missing!</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>checked</td>
                        <td>boolean</td>
                        <td>Decide if the radio button should be checked or not</td>
                        <td><em>false</em></td>
                        <td />
                    </tr>
                    <tr>
                        <td>name</td>
                        <td>string</td>
                        <td>Give the radio button an name</td>
                        <td>radioButton</td>
                        <td />
                    </tr>
                </tbody>
            </Table>
        );
    }
};