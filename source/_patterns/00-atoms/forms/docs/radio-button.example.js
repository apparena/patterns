import React from "react";
import {RadioButton} from "apparena-patterns-react";

export default function RadioButtonExample({text}) {
    return (
        <RadioButton onChange={::this.check} text={text} />
    );
}

/*;;usage
<RadioButtonExample text="Check Me Out!"/>
;;*/