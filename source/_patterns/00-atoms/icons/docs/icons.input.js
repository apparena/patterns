import React from 'react';
import {ReactComponent, Table, Tag} from 'apparena-patterns-react';

export default class IconInput extends ReactComponent {
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
                        name
                        <Tag type="warning" pill>
                            Required
                        </Tag>
                    </td>
                    <td>string</td>
                    <td>Give the icon a name</td>
                    <td><em>undefinded</em></td>
                    <td></td>
                </tr>
                <tr>
                    <td>type</td>
                    <td>oneOf</td>
                    <td>Select a type for the icon</td>
                    <td><em>undefinded</em></td>
                    <td>default, primary, secondary, success, info, warning, danger</td>
                </tr>
                <tr>
                    <td>border</td>
                    <td>boolean</td>
                    <td>Decide if the icon should have a border or not</td>
                    <td><em>undefinded</em></td>
                    <td></td>
                </tr>
                <tr>
                    <td>className</td>
                    <td>string</td>
                    <td>Give the icon a classname</td>
                    <td><em>undefinded</em></td>
                    <td></td>
                </tr>
                <tr>
                    <td>fixedWidth</td>
                    <td>boolean</td>
                    <td>Decide if the icon should have a fixd width or not</td>
                    <td><em>undefinded</em></td>
                    <td></td>
                </tr>
                <tr>
                    <td>flip</td>
                    <td>oneOf</td>
                    <td>Select the way the icon should be flipped</td>
                    <td><em>undefinded</em></td>
                    <td>horizontal, vertical</td>
                </tr>
                <tr>
                    <td>inverse</td>
                    <td>boolean</td>
                    <td>Decide if the icon should inverse or not</td>
                    <td><em>undefinded</em></td>
                    <td></td>
                </tr>
                <tr>
                    <td>pulse</td>
                    <td>bool</td>
                    <td>Decide if the icon should pulse or not</td>
                    <td><em>undefinded</em></td>
                    <td></td>
                </tr>
                <tr>
                    <td>rotate</td>
                    <td>oneOf</td>
                    <td>Select the rotation of the icon</td>
                    <td><em>undefinded</em></td>
                    <td>90, 180, 270</td>
                </tr>
                <tr>
                    <td>size</td>
                    <td>oneOf</td>
                    <td>Select the size of the icon</td>
                    <td><em>undefinded</em></td>
                    <td>lg, 2x, 3x, 4x, 5x</td>
                </tr>
                <tr>
                    <td>spin</td>
                    <td>boolean</td>
                    <td>Decide if the icon should spin or not</td>
                    <td><em>undefinded</em></td>
                    <td></td>
                </tr>
                <tr>
                    <td>stack</td>
                    <td>oneOf</td>
                    <td>Select the stack of the icon</td>
                    <td><em>undefinded</em></td>
                    <td>1x, 2x</td>
                </tr>
                </tbody>
            </Table>
        );
    }
};