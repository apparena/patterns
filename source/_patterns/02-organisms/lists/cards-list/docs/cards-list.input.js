import React from 'react';
import {ReactComponent, Table, Tag} from 'apparena-patterns-react';

export default class CardsListInput extends ReactComponent {
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
                        <td>Create at least one children for the auth</td>
                        <td><em>undefined</em></td>
                        <td> PropTypes.element, PropTypes.arrayOf(PropTypes.element)</td>
                    </tr>
                </tbody>
            </Table>
        );
    }
};