import React from 'react';
import {ReactComponent, Table, Tag} from 'apparena-patterns-react';

export default class JumbotronInput extends ReactComponent {
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
                            children
                           <Tag type="warning" pill>
                                Required
                            </Tag>    
                        </td>
                        <td>oneOf</td>
                        <td>Create some childrens</td>
                        <td><em>undefined</em></td>
                        <td>PropTypes.element, PropTypes.arrayOf(PropTypes.element)</td>
                    </tr>
                    <tr>
                        <td>classNames</td>
                        <td>string</td>
                        <td>Give the Jumbotron a classname</td>
                        <td>""</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>buttonLabel</td>
                        <td>string</td>
                        <td>Give the dropdown button a label</td>
                        <td><em>undefined</em></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>buttonSize</td>
                        <td>string</td>
                        <td>Give the dropdown button a size</td>
                        <td><em>undefined</em></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>buttonType</td>
                        <td>string</td>
                        <td>Give the dropdown button a type</td>
                        <td><em>undefined</em></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>children</td>
                        <td>node</td>
                        <td>Create children for the dropdown</td>
                        <td><em>undefined</em></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>className</td>
                        <td>string</td>
                        <td>Give the dropdown a className</td>
                        <td><em>undefined</em></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>isOpen</td>
                        <td>boolean</td>
                        <td>Decide if the button should be open or not</td>
                        <td>false</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>arrow</td>
                        <td>boolean</td>
                        <td>Decide if the button should have a arrow or not</td>
                        <td>true</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>dropup</td>
                        <td>boolean</td>
                        <td>Decide if the button should drop up instead of down</td>
                        <td>false</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>onSelect</td>
                        <td>function</td>
                        <td>Add a function do the component</td>
                        <td>NO_OP = () => undefined</td>
                        <td></td>
                    </tr>
                </tbody>
            </Table>
        );
    }
};