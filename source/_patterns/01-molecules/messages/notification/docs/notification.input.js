import React from 'react';
import {ReactComponent, Table, Tag} from 'apparena-patterns-react';

export default class NotificationInput extends ReactComponent {
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
                            header
                            <Tag type="warning" pill>
                                Required
                            </Tag>
                        </td>
                        <td>string</td>
                        <td>Set the header of the notification</td>
                        <td><em>undefined</em></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>
                            type
                            <Tag type="warning" pill>
                                Required
                            </Tag>
                        </td>
                        <td>oneOf</td>
                        <td>Select the type of the notification</td>
                        <td>info</td>
                        <td>danger, info, success, warning</td>
                    </tr>
                    <tr>
                        <td>children</td>
                        <td>node</td>
                        <td>Give the notification some children to create content in the notification</td>
                        <td><em>undefined</em></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>duration</td>
                        <td>number</td>
                        <td>Set the duration the notification should be displayed</td>
                        <td><em>undefined</em></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>className</td>
                        <td>string</td>
                        <td>Give the notification a classname</td>
                        <td><em>undefined</em></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>onClose</td>
                        <td>function</td>
                        <td>Add a function to the point the function is closing down</td>
                        <td><em>undefined</em></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>fixed</td>
                        <td>boolean</td>
                        <td>Decide if the notification should be fixed or not</td>
                        <td>true</td>
                        <td></td>
                    </tr>
                </tbody>
            </Table>
        );
    }
};