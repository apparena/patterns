import React from 'react';
import {Table} from 'apparena-patterns-react';

export default function TableExample() {
    return (
        <Table bordered hover responsive inverse>
            <thead>
            <tr>
                <th>Name</th>
                <th>Age</th>
                <th>Hometown</th>
                <th>Height</th>
                <th>Income p.a.</th>
                <th>Data #1</th>
                <th>Data #2</th>
                <th>Data #3</th>
                <th>Data #4</th>
                <th>Data #5</th>
                <th>Data #6</th>
            </tr>
            </thead>
            <tbody>
            <tr>
                <td>Jason Miller</td>
                <td>22</td>
                <td>Seatle</td>
                <td>181</td>
                <td>56000</td>
                <td>data</td>
                <td>data</td>
                <td>data</td>
                <td>data</td>
                <td>data</td>
                <td>data</td>
            </tr>
            <tr>
                <td>Mark Cooper</td>
                <td>43</td>
                <td>Denver</td>
                <td>190</td>
                <td>250000</td>
                <td>data</td>
                <td>data</td>
                <td>data</td>
                <td>data</td>
                <td>data</td>
                <td>data</td>
            </tr>
            <tr>
                <td>John Doe</td>
                <td>36</td>
                <td>Boston</td>
                <td>175</td>
                <td>23750</td>
                <td>data</td>
                <td>data</td>
                <td>data</td>
                <td>data</td>
                <td>data</td>
                <td>data</td>
            </tr>
            </tbody>
        </Table>
    );
}