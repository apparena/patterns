import React from 'react';
import {ReactComponent, Table, Tag} from 'apparena-patterns-react';

export default class AuthInput extends ReactComponent {
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
                        <td>Create at least one children for the auth</td>
                        <td><em>undefined</em></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>
                            loginHeader
                            <Tag type="warning" pill>
                                Required
                            </Tag>
                        </td>
                        <td>string</td>
                        <td>Give the login header some content</td>
                        <td><em>undefined</em></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>
                            authButtonText
                            <Tag type="warning" pill>
                                Required
                            </Tag>
                        </td>
                        <td>string</td>
                        <td>Give the button some text</td>
                        <td><em>undefined</em></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>
                            logoURI
                            <Tag type="warning" pill>
                                Required
                            </Tag>
                        </td>
                        <td>string</td>
                        <td>Declare an URI for a logo</td>
                        <td><em>undefined</em></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>
                            onAuthClick
                            <Tag type="warning" pill>
                                Required
                            </Tag>
                        </td>
                        <td>function</td>
                        <td>Add a function to the button</td>
                        <td><em>undefined</em></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>contextInfoTitle</td>
                        <td>string</td>
                        <td>Give the auth some text to create an info title</td>
                        <td><em>undefined</em></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>contextInfoText</td>
                        <td>string</td>
                        <td>Give the auth some text to creat an info text</td>
                        <td><em>undefined</em></td>
                        <td></td>
                    </tr>
                </tbody>
            </Table>
        );
    }
};