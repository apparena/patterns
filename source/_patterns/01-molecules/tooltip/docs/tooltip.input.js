import React from 'react';
import {ReactComponent, Table, Tag} from 'apparena-patterns-react';

export default class TooltipInput extends ReactComponent {
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
                    <td>node</td>
                    <td>Create one children for the tooltip</td>
                    <td><em>undefined</em></td>
                    <td></td>
                </tr>
                <tr>
                    <td>
                        label
                        <Tag type="warning" pill>
                            Required
                        </Tag>
                    </td>
                    <td>string</td>
                    <td>Give the tooltip some content</td>
                    <td><em>undefined</em></td>
                    <td></td>
                </tr>
                <tr>
                    <td>transition</td>
                    <td>string</td>
                    <td>Define the transition animation for the tooltip</td>
                    <td>fadeIn</td>
                    <td></td>
                </tr>
                <tr>
                    <td>positioning</td>
                    <td>oneOf</td>
                    <td>Select the position of the tooltip</td>
                    <td>top</td>
                    <td>top, top left, top right, bottom, bottom left, bottom right, left, left top, left right, right
                        top, right bottom, overlay
                    </td>
                </tr>
                <tr>
                    <td>zIndex</td>
                    <td>number</td>
                    <td>Define the zIndex of the tooltip</td>
                    <td><em>undefined</em></td>
                    <td></td>
                </tr>
                </tbody>
            </Table>
        );
    }
};