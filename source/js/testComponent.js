import React from "react"
import { render } from "react-dom"
import Alert from "../_patterns/01-molecules/alert/alert"
import Jumbotron from "../_patterns/01-molecules/jumbotron/jumbotron"
import ProgressTrackerStep from "../_patterns/00-atoms/progress-tracker-step/progress-tracker-step"
import ProgressTracker from "../_patterns/01-molecules/progress-tracker/progress-tracker"

const testComponents = (
    <div>
        <Alert classNames="test test2" type="danger" text="This is an alert!" />
        <Jumbotron classNames="test test2">
            <h2>Jumbo</h2>
            <p>I am a jumbotron</p>
        </Jumbotron>
        <ProgressTracker>
            <ProgressTrackerStep active />
            <ProgressTrackerStep />
        </ProgressTracker>
    </div>
);

render(testComponents, document.getElementById("component"));