import React from "react"
import { render } from "react-dom"
import Alert from "../../source/_patterns/01-molecules/alert/alert"
import Jumbotron from "../../source/_patterns/01-molecules/jumbotron/jumbotron"
import ProgressTrackerStep from "../../source/_patterns/00-atoms/progress-tracker-step/progress-tracker-step"
import ProgressTracker from "../../source/_patterns/01-molecules/progress-tracker/progress-tracker"
import ProgressBar from "../../source/_patterns/01-molecules/progress-bar/progress-bar"
import SelectMenu from "../../source/_patterns/00-atoms/forms/select-menu"
import TextArea from "../../source/_patterns/00-atoms/forms/text-area"
import TextField from "../../source/_patterns/00-atoms/forms/text-field"
import Table from "../../source/_patterns/00-atoms/table/table"
import CheckBox from "../../source/_patterns/00-atoms/forms/checkbox"

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
        <ProgressBar value="25" maxValue="100" minWidth="50" text="Hello World" type="danger"/>
        <SelectMenu id="myID" label="sElect" options={[1,2,3,4]} onChangeFunction={(e) => console.log(e.target.value)}/>
        <TextArea placeholder="textarea" onChangeFunction={(e) => console.log(e.target.value)}/>
        <TextField id="custom-text-field" onChangeFunction={(e) => console.log(e.target.value)}/>
        <Table tableData={[
            { cols: ['Left', 'Right'] },
            { rows: { 0: ['25%', '75%'], 1: ['class-names:table-success', '50%', '50%'], 2: ['66%', '33%'] } }
            ]} tableHeadClassNames="thead-inverse"
        />
        <CheckBox text="select me" onFilterSelect={(e, t) => console.log(t)}/>
    </div>
);

render(testComponents, document.getElementById("component"));