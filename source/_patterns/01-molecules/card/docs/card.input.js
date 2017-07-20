import React from 'react';
import {ReactComponent, Table, Tag} from 'apparena-patterns-react';

export default class CardInput extends ReactComponent {
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
                        <td>Create some elements so this component has childrens</td>
                        <td><em>undefined</em></td>
                        <td>PropTypes.element, PropTypes.arrayOf(PropTypes.element)</td>
                    </tr>
                    <tr>
                        <td>type</td>
                        <td>oneOf</td>
                        <td>Select the type of the card</td>
                        <td>default</td>
                        <td>default, primary, success, info, warning, danger, outline-primary, outline-secondary, outline-success, outline-info, outline-warning, outline-danger</td>
                    </tr>
                    <tr>
                        <td>inverse</td>
                        <td>boolean</td>
                        <td>Decide if the card should be inverse or not</td>
                        <td><em>undefined</em></td>
                        <td></td>
                    </tr>
                </tbody>
            </Table>
        );
    }
};