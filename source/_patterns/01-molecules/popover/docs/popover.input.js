import React from 'react';
import {ReactComponent, Table, Tag} from 'apparena-patterns-react';

export default class PopOverInput extends ReactComponent {
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
                            Required
                        </Tag>
                    </td>
                    <td>oneOf</td>
                    <td>Define one children for this component</td>
                    <td><em>undefined</em></td>
                    <td></td>
                </tr>
                <tr>
                    <td>className</td>
                    <td>string</td>
                    <td>Give the popover a classname</td>
                    <td><em>undefined</em></td>
                    <td></td>
                </tr>
                <tr>
                    <td>title</td>
                    <td>boolean</td>
                    <td>Give the popover a title</td>
                    <td><em>undefined</em></td>
                    <td></td>
                </tr>
                <tr>
                    <td>content</td>
                    <td>element</td>
                    <td>Declare the content of the popover</td>
                    <td><em>undefined</em></td>
                    <td></td>
                </tr>
                <tr>
                    <td>open</td>
                    <td>boolean</td>
                    <td>Decide if the popover should be open or not</td>
                    <td>false</td>
                    <td></td>
                </tr>
                <tr>
                    <td>positioning</td>
                    <td>oneOf</td>
                    <td>Select the position of the popover</td>
                    <td>top</td>
                    <td>top, top left, top right, bottom, bottom left, bottom right, left, left top, left bottom, right,
                        right top, right bottom
                    </td>
                </tr>
                <tr>
                    <td>zIndex</td>
                    <td>number</td>
                    <td>Define the zIndex of the popover</td>
                    <td>1060</td>
                    <td></td>
                </tr>
                </tbody>
            </Table>
        );
    }
};