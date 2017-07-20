import React from 'react';
import {ReactComponent, Table, Tag} from "apparena-patterns-react";

export default class TextFieldInput extends ReactComponent {
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
                        <td>
                            id
                           <Tag type="warning" pill>
                                Required
                            </Tag>
                        </td>
                        <td>string</td>
                        <td>Give the text area an ID</td>
                        <td><em>undefinded</em></td>
                        <td />
                    </tr>
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
                </tbody>
            </Table>
        );
    }
};