import React from 'react';
import {ReactComponent, Table} from "apparena-patterns-react";

export default class AjaxLoaderInput extends ReactComponent {
    render () {
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
                        <td>
                            resource
                            <span className="badge badge-warning">
                                Required
                            </span>    
                        </td>
                        <td>string</td>
                        <td>Give the ajax loader some resources</td>
                        <td><em>undefine</em></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>
                            onLoadingDone
                            <span className="badge badge-warning">
                                Required
                            </span>    
                        </td>
                        <td>function</td>
                        <td>Add a function to the ajax loader</td>
                        <td><em>undefine</em></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>spinnerClassName</td>
                        <td>string</td>
                        <td>Give the spinner a classname</td>
                        <td>""</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>spinnerSize</td>
                        <td>oneOf</td>
                        <td>Select a size for the spinner</td>
                        <td>lg</td>
                        <td>sm, md, lg</td>
                    </tr>
                    <tr>
                        <td>spinnerType</td>
                        <td>oneOf</td>
                        <td>Select a type for the spinner</td>
                        <td>primary</td>
                        <td>default, primary, inverted</td>
                    </tr>
                    <tr>
                        <td>autoHide</td>
                        <td>boolean</td>
                        <td>Decide if the spinner should automaticly hide or not</td>
                        <td>true</td>
                        <td></td>
                    </tr>
                </tbody>
            </Table>
        );
    }
};