import React from "react";
import {Checkbox} from "apparena-patterns-react";

export default class MyAwesomeClass extends React.ReactComponent {
    ...
    render() {
        return (
            <Checkbox onChange={::this.check}>
                Check Me Out!
            </Checkbox>
        )
    }
}