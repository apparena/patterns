import React from 'react';
import {ReactComponent, Table, Tag} from 'apparena-patterns-react';

export default class NavItemInput extends ReactComponent {
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
                            children
                            <Tag type="warning" pill>
                                Required
                            </Tag>
                        </td>
                        <td>oneOf</td>
                        <td>Define at least one children for this component (NavItem)</td>
                        <td><em>undefined</em></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>inline</td>
                        <td>boolean</td>
                        <td>Decide if the nav should have inlines or not</td>
                        <td>false</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>tabs</td>
                        <td>boolean</td>
                        <td>Decide if the nav should have tabs or not</td>
                        <td>false</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>pills</td>
                        <td>boolean</td>
                        <td>Decide if the nav should have pills or not</td>
                        <td>false</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>stacked</td>
                        <td>boolean</td>
                        <td>Decide if the nav should be stacked or not</td>
                        <td>false</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>vertical</td>
                        <td>boolean</td>
                        <td>Decide if the nav should have be vertical or not</td>
                        <td>false</td>
                        <td></td>
                    </tr>
                </tbody>
            </Table>
        );
    }
};