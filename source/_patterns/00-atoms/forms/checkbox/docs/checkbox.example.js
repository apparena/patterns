import React from "react";
import {Checkbox} from "apparena-patterns-react";

export default function CheckboxExample({text}) {
    return (
        <Checkbox onChange={::this.check}>
            {text}
        </Checkbox>
    );
}

/*;;usage
<CkeckboxExample text="Check Me Out!"/>
;;*/