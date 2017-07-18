import React from 'react';
import {ProgressTracker, ProgressTrackerStep} from 'apparena-patterns-react';

export default class MyAwesomeClass extends React.Component{
    render(){
        return(
            <ProgressTracker>
                <ProgressTrackerStep text="Step 1" active />
                <ProgressTrackerStep text="Step 2" />
                <ProgressTrackerStep text="Step 3" />
            </ProgressTracker>
        )
    }
}