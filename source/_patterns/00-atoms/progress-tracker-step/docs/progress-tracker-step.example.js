import React from 'react';
import {ProgressTrackerStep} from 'apparena-patterns-react';

export default function ProgressTrackerStepExample() {
    return (
        <div>
            <ProgressTrackerStep text="Adresse"/>
            <ProgressTrackerStep text="Paymethod" active/>
            <ProgressTrackerStep text="Check-Out"/>
        </div>
    );
}