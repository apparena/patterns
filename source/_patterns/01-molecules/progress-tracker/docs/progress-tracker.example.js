import React from 'react';
import {ProgressTracker, ProgressTrackerStep} from 'apparena-patterns-react';

export default function ProgressTrackerExample(){
    return(
        <ProgressTracker>
            <ProgressTrackerStep text="Downloading"/>
            <ProgressTrackerStep text="Installing" active />
            <ProgressTrackerStep text="Finish" />
        </ProgressTracker>
        )
}

/*;;usage
<ProgressTrackerExample />
;;*/