import React from 'react';
import {ReactComponent, Table, Tag} from 'apparena-patterns-react';

export default class ProgressBarInput extends ReactComponent {
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
                            value
                            <Tag type="warning" pill>
                                Required
                            </Tag>
                        </td>
                        <td>number</td>
                        <td>Set the current value of the progress bar</td>
                        <td><em>undefined</em></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>
                            maxValue
                            <Tag type="warning" pill>
                                Required
                            </Tag>
                        </td>
                        <td>number</td>
                        <td>Set the maximum value of the progress bar</td>
                        <td><em>undefined</em></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>
                            minWidth
                            <Tag type="warning" pill>
                                Required
                            </Tag>
                        </td>
                        <td>number</td>
                        <td>Set the minimal width of the progress bar</td>
                        <td><em>undefined</em></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>
                            type
                            <Tag type="warning" pill>
                                Required
                            </Tag>
                        </td>
                        <td>oneOf</td>
                        <td>Select the type of the progress bar</td>
                        <td><em>undefined</em></td>
                        <td>success, info, warning, danger</td>
                    </tr>
                    <tr>
                        <td>classNames</td>
                        <td>string</td>
                        <td>Give the progress bar a classname</td>
                        <td>""</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>striped</td>
                        <td>boolean</td>
                        <td>Decide if the progress bar should be stripped or not</td>
                        <td><em>undefined</em></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>animated</td>
                        <td>boolean</td>
                        <td>Decide if the progress bar should be animated or not</td>
                        <td><em>undefined</em></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>text</td>
                        <td>string</td>
                        <td>Give the progress bar some text</td>
                        <td>""</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>captionID</td>
                        <td>string</td>
                        <td>Define the caption of the progress bars</td>
                        <td>progress-bar-caption</td>
                        <td></td>
                    </tr>
                </tbody>
            </Table>
        );
    }
};