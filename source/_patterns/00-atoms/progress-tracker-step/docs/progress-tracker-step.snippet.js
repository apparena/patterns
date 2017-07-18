import React from "react";
import {ProgressTrackerStep} from "apparena-patterns-react";

export default class MyAwesomeClass extends React.ReactComponent {
    render() {
        return (
             <div>
                <ProgressTrackerStep type="active" text="Adresse"/>
                <ProgressTrackerStep text="Paymethod"/>
                <ProgressTrackerStep text="Check-Out"/>
            </div>
        )
    }
}