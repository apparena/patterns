import React from 'react';
import {ReactComponent, Table} from "apparena-patterns-react";

export default class TableInput extends ReactComponent {
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
                            children
                            <span className="badge badge-warning">
                                Required
                            </span>
                        </td>
                        <td>node</td>
                        <td>The table needs some childrens</td>
                        <td><em>undefined</em></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>classNames</td>
                        <td>string</td>
                        <td>Give the table some classNames</td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>striped</td>
                        <td>boolean</td>
                        <td>Decide if the table should be striped or not</td>
                        <td>false</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>bordered</td>
                        <td>boolean</td>
                        <td>Decide if the table should be bordered or not</td>
                        <td>false</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>condensed</td>
                        <td>boolean</td>
                        <td>Decide if the table should be condensed or not</td>
                        <td>false</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>hover</td>
                        <td>boolean</td>
                        <td>Decide if the table should hover or not</td>
                        <td>false</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>responsive</td>
                        <td>boolean</td>
                        <td>Decide if the table should be responsive or not</td>
                        <td>false</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>inverse</td>
                        <td>boolean</td>
                        <td>Decide if the table should be inverse or not</td>
                        <td>false</td>
                        <td></td>
                    </tr>
                </tbody>
            </Table>
        );
    }
};