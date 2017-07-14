import React from 'react';
import {ReactComponent, Table, Tag} from 'apparena-patterns-react';

export default class MediaInput extends ReactComponent {
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
                        <td>classNames</td>
                        <td>string</td>
                        <td>Give the media a classname</td>
                        <td><em>undefined</em></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>mediaPosition</td>
                        <td>oneOf</td>
                        <td>Select the position of the media</td>
                        <td>left</td>
                        <td>left, right</td>
                    </tr>
                    <tr>
                        <td>mediaClassNames</td>
                        <td>string</td>
                        <td>Give the media object a classname</td>
                        <td><em>undefined</em></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>mediaHref</td>
                        <td>string</td>
                        <td>Give the media object a refernce /></td>
                        <td>#</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>mediaObject</td>
                        <td>node</td>
                        <td>The Children of this component</td>
                        <td><em>undefined</em></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>mediaBodyClassNames</td>
                        <td>string</td>
                        <td>Give the media body a classname</td>
                        <td><em>undefined</em></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>mediaBodyHeaderClassNames</td>
                        <td>string</td>
                        <td>Give the media body header a classname</td>
                        <td><em>undefined</em></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>mediaBodyHeader</td>
                        <td>string</td>
                        <td>???</td>
                        <td><em>undefined</em></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>mediaBody</td>
                        <td>string</td>
                        <td>???</td>
                        <td><em>undefined</em></td>
                        <td></td>
                    </tr>
                </tbody>
            </Table>
        );
    }
};