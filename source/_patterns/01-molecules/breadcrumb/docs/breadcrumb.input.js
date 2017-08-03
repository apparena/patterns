import React from 'react';
import {ReactComponent, Table, Tag} from 'apparena-patterns-react';

export default class BreadcrumbInput extends ReactComponent {
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
                        crumbNames
                        <Tag type="warning" pill>
                            Required
                        </Tag>
                    </td>
                    <td>array</td>
                    <td>Give the component an array with names so it can create the breadcrumbs</td>
                    <td><em>undefined</em></td>
                    <td></td>
                </tr>
                <tr>
                    <td>
                        crumbLocations
                        <Tag type="warning" pill>
                            Required
                        </Tag>
                    </td>
                    <td>array</td>
                    <td>Give the component an array with location so it knows where the breadcrumbs can be found</td>
                    <td><em>undefined</em></td>
                    <td></td>
                </tr>
                <tr>
                    <td>classNames</td>
                    <td>string</td>
                    <td>Give the breadcrumbs a classname</td>
                    <td><em>undefined</em></td>
                    <td></td>
                </tr>
                </tbody>
            </Table>
        );
    }
};