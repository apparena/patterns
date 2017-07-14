import React from "react";
import {SelectMenu} from "apparena-patterns-react";

export default function SelectMenuExample({text}) {
    return (
        <SelectMenu onChange={::this.change} options:{["action","sci-fi","western"]} />
    );
}

/*;;usage
<SelectMenuExample text="Check Me Out!"/>
;;*/