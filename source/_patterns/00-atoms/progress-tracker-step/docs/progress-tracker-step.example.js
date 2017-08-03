import React from 'react';
import {ProgressTrackerStep} from 'apparena-patterns-react';

export default function ProgressTrackerStepExample() {
    return (
        <div>
            <ProgressTrackerStep type="active" text="Adresse"/>
            <ProgressTrackerStep text="Paymethod"/>
            <ProgressTrackerStep text="Check-Out"/>
        </div>
    );
}