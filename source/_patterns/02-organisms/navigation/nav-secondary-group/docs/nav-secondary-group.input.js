import React from 'react';
import {ReactComponent, Table, Tag} from 'apparena-patterns-react';

export default class NavSecondaryGroupInput extends ReactComponent {
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
                        children
                        <Tag type="warning" pill>
                            Requiered
                        </Tag>
                    </td>
                    <td>node</td>
                    <td>Create some children for this component</td>
                    <td><em>undefined</em></td>
                    <td></td>
                </tr>
                <tr>
                    <td>title</td>
                    <td>string</td>
                    <td>Give this component a title</td>
                    <td><em>undefined</em></td>
                    <td></td>
                </tr>
                </tbody>
            </Table>
        );
    }
};