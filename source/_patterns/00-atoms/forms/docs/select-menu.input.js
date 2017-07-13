import React from 'react';
import {ReactComponent, Table} from "apparena-patterns-react";

export default class SelectMenuInput extends ReactComponent {
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
                            onChange
                            <span className="badge badge-warning">
                                Required
                            </span>
                        </td>
                        <td>function</td>
                        <td>Add a function to the select menus</td>
                        <td><em>undefinded</em></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>
                            defaultValue
                            <span className="badge badge-warning">
                                Required
                            </span>
                        </td>
                        <td>oneOf</td>
                        <td>Decide wich default Value the select menu should have</td>
                        <td><em>undefinded</em></td>
                        <td>PropTypes.number, PropTypes.string, PropTypes.array</td>
                    </tr>
                    <tr>
                        <td>
                            options
                            <span className="badge badge-warning">
                                Required
                            </span>
                        </td>
                        <td>array</td>
                        <td>Add some options to the select menu</td>
                        <td><em>undefinded</em></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>id</td>
                        <td>string</td>
                        <td>Give the select menu an ID</td>
                        <td><em>undefinded</em></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>multi</td>
                        <td>boolean</td>
                        <td>Decide if the select menu should be multi or not</td>
                        <td><em>false</em></td>
                        <td />
                    </tr>
                    <tr>
                        <td>clearable</td>
                        <td>boolean</td>
                        <td>Decide if the select menu should be clearable or not</td>
                        <td>false</td>
                        <td />
                    </tr>
                    <tr>
                        <td>disabled</td>
                        <td>boolean</td>
                        <td>Decide if the select menu should be disabled or not</td>
                        <td>false</td>
                        <td />
                    </tr>
                    <tr>
                        <td>autofocus</td>
                        <td>boolean</td>
                        <td>Decide if the select menu should have an autofocus or not</td>
                        <td>false</td>
                        <td />
                    </tr>
                    <tr>
                        <td>clearAllText</td>
                        <td>string</td>
                        <td>???</td>
                        <td>""</td>
                        <td />
                    </tr>
                    <tr>
                        <td>clearValueText</td>
                        <td>string</td>
                        <td>???</td>
                        <td>""</td>
                        <td />
                    </tr>
                    <tr>
                        <td>placeholder</td>
                        <td>string</td>
                        <td>Create a placeholder</td>
                        <td>Auswählen</td>
                        <td />
                    </tr>
                    <tr>
                        <td>searchingText</td>
                        <td>string</td>
                        <td>Add a searchingText</td>
                        <td>Suchen...</td>
                        <td />
                    </tr>
                    <tr>
                        <td>noResultsText</td>
                        <td>string</td>
                        <td>Define the output when there is no result</td>
                        <td>Keine Ergebnisse</td>
                        <td />
                    </tr>
                    <tr>
                        <td>backspaceToRemoveMessage</td>
                        <td>string</td>
                        <td>???</td>
                        <td>""</td>
                        <td />
                    </tr>      
                </tbody>
            </Table>
        );
    }
};