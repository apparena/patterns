import React from 'react';
import {ReactComponent, Table, Tag} from 'apparena-patterns-react';

export default class TableListInput extends ReactComponent {
    render () {
        return (
            <Table bordered hover>
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
                        <td>Give the table list a classname</td>
                        <td><em>undefined</em></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>scrollable</td>
                        <td>boolean</td>
                        <td>Decide if the table list should be srcollable or not</td>
                        <td><em>undefined</em></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>scrollableHeight</td>
                        <td>number</td>
                        <td>Define the scroll height</td>
                        <td><em>undefined</em></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>hover</td>
                        <td>boolean</td>
                        <td>Decide if the table list should have a hover effect or not</td>
                        <td><em>undefined</em></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>striped</td>
                        <td>boolean</td>
                        <td>Decide if the table list should be striped or not</td>
                        <td><em>undefined</em></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>bordered</td>
                        <td>boolean</td>
                        <td>Decide if the table list should have a border or not</td>
                        <td><em>undefined</em></td>
                        <td></td>
                    </tr>
                </tbody>
            </Table>
        );
    }
};