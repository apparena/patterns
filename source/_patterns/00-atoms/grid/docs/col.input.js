import React from 'react';
import {ReactComponent, Table} from "apparena-patterns-react";

export default class ColInput extends ReactComponent {
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
                        <td>children</td>
                        <td>node</td>
                        <td>Give the column some childrens</td>
                        <td><em>undefinded</em></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>className</td>
                        <td>string</td>
                        <td>Give the column a classname</td>
                        <td><em>undefinded</em></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>lg</td>
                        <td>string</td>
                        <td>Give the column a size</td>
                        <td><em>undefinded</em></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>md</td>
                        <td>string</td>
                        <td>Give the column a size</td>
                        <td><em>undefinded</em></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>sm</td>
                        <td>string</td>
                        <td>Give the column a size</td>
                        <td><em>undefinded</em></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>xs</td>
                        <td>string</td>
                        <td>Give the column a size</td>
                        <td><em>undefinded</em></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>xsOffset</td>
                        <td>number</td>
                        <td>Give the column a number for the offset</td>
                        <td><em>undefinded</em></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>smOffset</td>
                        <td>number</td>
                        <td>Give the column a number for the offset</td>
                        <td><em>undefinded</em></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>mdOffset</td>
                        <td>number</td>
                        <td>Give the column a number for the offset</td>
                        <td><em>undefinded</em></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>lgOffset</td>
                        <td>number</td>
                        <td>Give the column a number for the offset</td>
                        <td><em>undefinded</em></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>xsAutoContent</td>
                        <td>boolean</td>
                        <td>Decide if the column should have a auto content width or not</td>
                        <td><em>undefinded</em></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>smAutoContent</td>
                        <td>boolean</td>
                        <td>Decide if the column should have a auto content width or not</td>
                        <td><em>undefinded</em></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>mdAutoContent</td>
                        <td>boolean</td>
                        <td>Decide if the column should have a auto content width or not</td>
                        <td><em>undefinded</em></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>lgAutoContent</td>
                        <td>boolean</td>
                        <td>Decide if the column should have a auto content width or not</td>
                        <td><em>undefinded</em></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>xsHidden</td>
                        <td>boolena</td>
                        <td>Decide if the column should be hidden or not</td>
                        <td><em>undefinded</em></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>smHidden</td>
                        <td>boolena</td>
                        <td>Decide if the column should be hidden or not</td>
                        <td><em>undefinded</em></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>mdHidden</td>
                        <td>boolena</td>
                        <td>Decide if the column should be hidden or not</td>
                        <td><em>undefinded</em></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>lgHidden</td>
                        <td>boolena</td>
                        <td>Decide if the column should be hidden or not</td>
                        <td><em>undefinded</em></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>xsVerticalAlignment</td>
                        <td>oneOf</td>
                        <td>Select the vertical alignment fo the column</td>
                        <td><em>undefinded</em></td>
                        <td>auto, start, end, center, baseline, stretch</td>
                    </tr>
                    <tr>
                        <td>smVerticalAlignment</td>
                        <td>oneOf</td>
                        <td>Select the vertical alignment fo the column</td>
                        <td><em>undefinded</em></td>
                        <td>auto, start, end, center, baseline, stretch</td>
                    </tr>
                    <tr>
                        <td>mdVerticalAlignment</td>
                        <td>oneOf</td>
                        <td>Select the vertical alignment fo the column</td>
                        <td><em>undefinded</em></td>
                        <td>auto, start, end, center, baseline, stretch</td>
                    </tr>
                    <tr>
                        <td>lgVerticalAlignment</td>
                        <td>oneOf</td>
                        <td>Select the vertical alignment fo the column</td>
                        <td><em>undefinded</em></td>
                        <td>auto, start, end, center, baseline, stretch</td>
                    </tr>
                    <tr>
                        <td>xsOrder</td>
                        <td>oneOf</td>
                        <td>Select how the column should be ordered</td>
                        <td><em>undefinded</em></td>
                        <td>unordered, last, first</td>
                    </tr>
                    <tr>
                        <td>smOrder</td>
                        <td>oneOf</td>
                        <td>Select how the column should be ordered</td>
                        <td><em>undefinded</em></td>
                        <td>unordered, last, first</td>
                    </tr>
                    <tr>
                        <td>mdOrder</td>
                        <td>oneOf</td>
                        <td>Select how the column should be ordered</td>
                        <td><em>undefinded</em></td>
                        <td>unordered, last, first</td>
                    </tr>
                    <tr>
                        <td>lgOrder</td>
                        <td>oneOf</td>
                        <td>Select how the column should be ordered</td>
                        <td><em>undefinded</em></td>
                        <td>unordered, last, first</td>
                    </tr>
                </tbody>
            </Table>
        );
    }
};