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
                        <td>className</td>
                        <td>string</td>
                        <td>Give the modal a classname</td>
                        <td><em>undefined</em></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>size</td>
                        <td>oneOf</td>
                        <td>Select a size for the modal</td>
                        <td>sm</td>
                        <td>lg, sm, md, xs, xl</td>
                    </tr>
                    <tr>
                        <td>type</td>
                        <td>oneOf</td>
                        <td>Select the type for the modal</td>
                        <td>default</td>
                        <td>primary, secondary, danger, info, success, warning, default</td>
                    </tr>
                    <tr>
                        <td>visible</td>
                        <td>boolean</td>
                        <td>Decide if the modal should be visible or not</td>
                        <td>true</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>modalBackdrop</td>
                        <td>boolean</td>
                        <td>Decide if the modal should fade in or not</td>
                        <td>true</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>draggable</td>
                        <td>boolean</td>
                        <td>Decide if the modal should be draggable or not</td>
                        <td>false</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>scrollable</td>
                        <td>boolean</td>
                        <td>Decide if the modal should be scrollable or not</td>
                        <td>false</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>transition</td>
                        <td>string</td>
                        <td>Set the transition for the modal</td>
                        <td>expandIn</td>
                        <td></td>
                    </tr>
                </tbody>
            </Table>
        );
    }
};