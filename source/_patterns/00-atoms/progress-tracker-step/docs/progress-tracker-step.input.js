import React from 'react';
import {ReactComponent, Table} from "apparena-patterns-react";

export default class ProgressTrackerStepInput extends ReactComponent {
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
                        <td>active</td>
                        <td>bool</td>
                        <td>Decide if the tracker should be active or not</td>
                        <td>false</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>id</td>
                        <td>string</td>
                        <td>Give the tracker an ID</td>
                        <td><em>undefinded</em></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>href</td>
                        <td>string</td>
                        <td>Give the tracker a refernce /></td>
                        <td><em>undefinded</em></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>onClick</td>
                        <td>function</td>
                        <td>Connect the traker to a function</td>
                        <td><em>undefinded</em></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>text</td>
                        <td>string</td>
                        <td>Give the tracker some text</td>
                        <td><em>undefinded</em></td>
                        <td></td>
                    </tr>
                </tbody>
            </Table>
        );
    }
};