import React from 'react';
import {ReactComponent, Table, Tag} from 'apparena-patterns-react';

export default class NavbarInput extends ReactComponent {
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
                        <td>Handle one of the PropTypes over</td>
                        <td><em>undefined</em></td>
                        <td>PropTypes.string, </td>
                    </tr>
                    <tr>
                        <td>fixed</td>
                        <td>oneOf</td>
                        <td>Decide if the navbar should be fixed on top or bottom</td>
                        <td><em>undefined</em></td>
                        <td>top, bottom</td>
                    </tr>
                    <tr>
                        <td>colorScheme</td>
                        <td>oneOf</td>
                        <td>Decide if the navbar color scheme should be light or inverse</td>
                        <td>light</td>
                        <td>light, inverse</td>
                    </tr>
                    <tr>
                        <td>bg</td>
                        <td>oneOf</td>
                        <td>Select a background color for the navbar</td>
                        <td>faded</td>
                        <td>primary, success, info, warning, danger, inverse, faded</td>
                    </tr>
                </tbody>
            </Table>
        );
    }
};