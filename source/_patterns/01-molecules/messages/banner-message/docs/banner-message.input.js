import React from 'react';
import {ReactComponent, Table, Tag} from 'apparena-patterns-react';

export default class BannerMessageInput extends ReactComponent {
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
                            <Tag type="warning" pill>
                                Required
                            </Tag>
                        </td>
                        <td>node</td>
                        <td>This component needs at least one children</td>
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
                        <td>Select the type of the alert</td>
                        <td>info</td>
                        <td>danger, info, success, warning</td>
                    </tr>
                    <tr>
                        <td>icon</td>
                        <td>string</td>
                        <td>Decide wich icon should be displayed</td>
                        <td><em>undefined</em></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>className</td>
                        <td>string</td>
                        <td>Give the banner message a classname</td>
                        <td>""</td>
                        <td></td>
                    </tr>
                </tbody>
            </Table>
        );
    }
};