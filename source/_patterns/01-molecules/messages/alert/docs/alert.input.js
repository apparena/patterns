import React from 'react';
import {ReactComponent, Table, Tag} from 'apparena-patterns-react';

export default class AlertInput extends ReactComponent {
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
                        text
                        <Tag type="warning" pill>
                            Required
                        </Tag>
                    </td>
                    <td>string</td>
                    <td>Set the text that should be displayed by the Alert</td>
                    <td><em>undefined</em></td>
                    <td></td>
                </tr>
                <tr>
                    <td>type</td>
                    <td>oneOf</td>
                    <td>Select the type of the alert</td>
                    <td><em>undefined</em></td>
                    <td>danger, info, success, warning</td>
                </tr>
                <tr>
                    <td>classNames</td>
                    <td>string</td>
                    <td>Set the classname for the alert</td>
                    <td><em>undefined</em></td>
                    <td></td>
                </tr>
                <tr>
                    <td>dismissible</td>
                    <td>boolean</td>
                    <td>Decide if the alert should be dismissible or not</td>
                    <td>false</td>
                    <td></td>
                </tr>
                </tbody>
            </Table>
        );
    }
};