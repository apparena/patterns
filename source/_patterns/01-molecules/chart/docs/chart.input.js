import React from 'react';
import {ReactComponent, Table, Tag} from 'apparena-patterns-react';

export default class ChartInput extends ReactComponent {
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
                            type
                           <Tag type="warning" pill>
                                Required
                            </Tag>    
                        </td>
                        <td>string</td>
                        <td>Set the type of the chart</td>
                        <td>Chart</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>
                            config
                           <Tag type="warning" pill>
                                Required
                            </Tag>    
                        </td>
                        <td>object</td>
                        <td>Add some configuration with an object</td>
                        <td><em>undefined</em></td>
                        <td></td>
                    </tr>
                </tbody>
            </Table>
        );
    }
};