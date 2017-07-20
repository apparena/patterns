import React from "react";
import {ProgressTrackerStep, ReactComponent} from "apparena-patterns-react";

export default class MyAwesomeClass extends ReactComponent {
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