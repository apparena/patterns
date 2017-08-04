import React from 'react';
import {ReactComponent, Table, Tag} from 'apparena-patterns-react';

export default class FilterbarInput extends ReactComponent {
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
                <tr>
                    <th>
                        filter
                        <Tag type="warning" pill>
                            Required
                        </Tag>
                    </th>
                    <th>shape</th>
                    <th>Configure your filter with the following components</th>
                    <th><em>undefined</em></th>
                    <th></th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <td>
                        onFilter
                        <Tag type="warning" pill>
                            Required
                        </Tag>
                    </td>
                    <td>function</td>
                    <td>Add a function to your filter</td>
                    <td><em>undefined</em></td>
                    <td></td>
                </tr>
                <tr>
                    <td>buttonText</td>
                    <td>string</td>
                    <td>Add some text to the button in the filter</td>
                    <td><em>undefined</em></td>
                    <td></td>
                </tr>
                <tr>
                    <td>status</td>
                    <td>object</td>
                    <td>???</td>
                    <td><em>undefined</em></td>
                    <td></td>
                </tr>
                <tr>
                    <td>groups</td>
                    <td>string</td>
                    <td>Add some text to the button in the filter</td>
                    <td><em>undefined</em></td>
                    <td></td>
                </tr>
                </tbody>
            </Table>
        );
    }
}