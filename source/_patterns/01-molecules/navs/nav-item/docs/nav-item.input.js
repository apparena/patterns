import React from 'react';
import {ReactComponent, Table, Tag} from 'apparena-patterns-react';

export default class NavItemInput extends ReactComponent {
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
                        <td>oneOf</td>
                        <td>Define at least one children for this component</td>
                        <td><em>undefined</em></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>className</td>
                        <td>string</td>
                        <td>Give the nav item a classname</td>
                        <td><em>undefined</em></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>dropdown</td>
                        <td>boolean</td>
                        <td>Decide if the nav item should have dropdown component</td>
                        <td>true</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>active</td>
                        <td>boolean</td>
                        <td>Decide if the nav item should be active or nor</td>
                        <td></td>
                        <td></td>
                    </tr>
                </tbody>
            </Table>
        );
    }
};