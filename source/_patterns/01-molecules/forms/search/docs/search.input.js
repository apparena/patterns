import React from 'react';
import {ReactComponent, Table} from 'apparena-patterns-react';

export default class SearchInput extends ReactComponent {
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
                    <td>formClassNames</td>
                    <td>string</td>
                    <td>Give the form a classname</td>
                    <td><em>undefined</em></td>
                    <td></td>
                </tr>
                <tr>
                    <td>labelClassNames</td>
                    <td>string</td>
                    <td>Give the label a classname</td>
                    <td><em>undefined</em></td>
                    <td></td>
                </tr>
                <tr>
                    <td>inputClassNames</td>
                    <td>string</td>
                    <td>Give the input a classname</td>
                    <td><em>undefined</em></td>
                    <td></td>
                </tr>
                <tr>
                    <td>prompt</td>
                    <td>string</td>
                    <td>???</td>
                    <td><em>undefined</em></td>
                    <td></td>
                </tr>
                <tr>
                    <td>placeholder</td>
                    <td>string</td>
                    <td>Create a placeholder in the search</td>
                    <td><em>undefined</em></td>
                    <td></td>
                </tr>
                <tr>
                    <td>method</td>
                    <td>oneOf</td>
                    <td>Select wich method should be executed</td>
                    <td>GET</td>
                    <td>GET, POST</td>
                </tr>
                <tr>
                    <td>id</td>
                    <td>string</td>
                    <td>Give the search an ID</td>
                    <td><em>undefined</em></td>
                    <td></td>
                </tr>
                </tbody>
            </Table>
        );
    }
};