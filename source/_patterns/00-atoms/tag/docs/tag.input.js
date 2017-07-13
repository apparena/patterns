import React from 'react';
import {ReactComponent, Table} from "apparena-patterns-react";

export default class TagInput extends ReactComponent {
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
                        <td>Give the tag a classname</td>
                        <td><em>undefined</em></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>type</td>
                        <td>oneOf</td>
                        <td>Select the type of the tag</td>
                        <td>default</td>
                        <td>default, primary, success, info, warning, danger</td>
                    </tr>
                    <tr>
                        <td>pill</td>
                        <td>boolean</td>
                        <td>Decide if the tag should be a pill or not</td>
                        <td><em>undefined</em></td>
                        <td>blank, top, self</td>
                    </tr>
                </tbody>
            </Table>
        );
    }
};