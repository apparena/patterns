import React from "react";
import {RadioButton} from "apparena-patterns-react";

export default class MyAwesomeClass extends React.ReactComponent {
    render() {
        return (
            <RadioButton onChange={::this.check} text="Check Me Out!" />
        )
    }
}