import React from 'react';
import {ProgressBar} from 'apparena-patterns-react';

export default function ProgressBarExample() {
    return [
        <ProgressBar
            value={71.125}
            maxValue={100}
            minWidth={4}
            type="danger"
            striped
        />,
        <ProgressBar
            value={40}
            maxValue={100}
            minWidth={4}
            type="success"
            striped
            animated
        />,
        <ProgressBar
            value={60}
            maxValue={100}
            minWidth={4}
            type="info"
            striped
            animated
        />,
        <ProgressBar
            value={80}
            maxValue={100}
            minWidth={4}
            type="warning"
            striped
        />
    ];
}
