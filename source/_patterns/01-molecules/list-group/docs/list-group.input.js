import React from 'react';
import {ReactComponent, Table, Tag} from 'apparena-patterns-react';

export default class ListGroupInput extends ReactComponent {
    render() {
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
                    <td>
                        listItems
                        <Tag type="warning" pill>
                            Required
                        </Tag>
                    </td>
                    <td>array</td>
                    <td>Define the list items in an array</td>
                    <td><em>undefined</em></td>
                    <td></td>
                </tr>
                <tr>
                    <td>classNames</td>
                    <td>string</td>
                    <td>Give the list group a classname</td>
                    <td><em>undefined</em></td>
                    <td></td>
                </tr>
                </tbody>
            </Table>
        );
    }
};