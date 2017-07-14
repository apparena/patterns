import React from 'react';
import {ReactComponent, Table, Tag} from "apparena-patterns-react";

export default class CheckboxInput extends ReactComponent {
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
                            onChange
                           <Tag type="warning" pill>
                                Required
                            </Tag>
                        </td>
                        <td>function</td>
                        <td>Add a function to the checkbox</td>
                        <td><em>undefinded</em></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>className</td>
                        <td>string</td>
                        <td>Give the checkbox a classname</td>
                        <td><em>undefined</em></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>zIndex</td>
                        <td>number</td>
                        <td>Define the zIndex for the tooltip</td>
                        <td><em>undefinded</em></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>disabled</td>
                        <td>boolean</td>
                        <td>Decide if the checkbox should be disabled or not</td>
                        <td><em>undefined</em></td>
                        <td />
                    </tr>
                    <tr>
                        <td>checked</td>
                        <td>boolean</td>
                        <td>Decide if the checkbox should be checked or not</td>
                        <td><em>undefined</em></td>
                        <td />
                    </tr>
                    <tr>
                        <td>id</td>
                        <td>string</td>
                        <td>Give the checkbox an ID</td>
                        <td>''</td>
                        <td />
                    </tr>
                    <tr>
                        <td>renderTooltip</td>
                        <td>boolean</td>
                        <td>Decide if the checkbox should have a tooltip or not</td>
                        <td>true</td>
                        <td />
                    </tr>
                    <tr>
                        <td>positionig</td>
                        <td>oneOf</td>
                        <td>Select the position of the tooltip for the checkbox</td>
                        <td>top</td>
                        <td>top, bottom, left, right, top left, top center, top right, right top, right middle, right bottom, bottom right, bottom center, bottom top, left top, left middle, left bottom</td>
                    </tr>
                </tbody>
            </Table>
        );
    }
};