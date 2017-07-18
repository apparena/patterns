import React from "react";
import {ReactComponent, Table} from "apparena-patterns-react";

export default class ButtonInput extends ReactComponent {
    render() {
        return (
            <Table bordered inverse>
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
                    <td>type</td>
                    <td>oneOf</td>
                    <td>Select the type of the button</td>
                    <td>secondary</td>
                    <td>default, primary, secondary, success, info, warning, danger, link, outline-primary,
                        outline-secondary, outline-success, outline-info, outline-warning, outline-danger
                    </td>
                </tr>
                <tr>
                    <td>size</td>
                    <td>oneOf</td>
                    <td>Select the size of the button</td>
                    <td><em>undefined</em></td>
                    <td>lg, sm, xs</td>
                </tr>
                <tr>
                    <td>target</td>
                    <td>oneOf</td>
                    <td>???</td>
                    <td><em>undefined</em></td>
                    <td>blank, top, self</td>
                </tr>
                <tr>
                    <td>block</td>
                    <td>boolean</td>
                    <td>???</td>
                    <td><em>undefined</em></td>
                    <td />
                </tr>
                <tr>
                    <td>rounded</td>
                    <td>boolean</td>
                    <td>Decide if the button should have rounded corners or not</td>
                    <td><em>undefined</em></td>
                    <td />
                </tr>
                <tr>
                    <td>href</td>
                    <td>string</td>
                    <td>Give the button a reference</td>
                    <td><em>undefined</em></td>
                    <td />
                </tr>
                <tr>
                    <td>isActive</td>
                    <td>boolean</td>
                    <td>Decide if the button should be active or not</td>
                    <td><em>undefined</em></td>
                    <td />
                </tr>
                <tr>
                    <td>isDisabled</td>
                    <td>boolean</td>
                    <td>Decide if the button should be disabled or not</td>
                    <td>false</td>
                    <td />
                </tr>
                <tr>
                    <td>onClick</td>
                    <td>function</td>
                    <td>Connects the button to a function</td>
                    <td><em>undefined</em></td>
                    <td />
                </tr>
                <tr>
                    <td>submit</td>
                    <td>boolean</td>
                    <td>Decide if the button should submit or not</td>
                    <td><em>undefined</em></td>
                    <td />
                </tr>
                <tr>
                    <td>state</td>
                    <td>oneOf</td>
                    <td>Select the state of the button</td>
                    <td>default</td>
                    <td>default, loading, success, error, warning</td>
                </tr>
                </tbody>
            </Table>
        );
    }
};