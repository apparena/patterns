import React from "react";
import {RadioButton} from "apparena-patterns-react";

export default function RadioButtonExample({text}) {
    return (
        <RadioButton onChange={::this.check} text="Check Me Out!" />
    );
}