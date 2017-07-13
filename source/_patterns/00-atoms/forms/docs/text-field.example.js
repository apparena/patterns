import React from "react";
import {TextField} from "apparena-patterns-react";

export default function TextFieldExample({text}) {
    return (
        <TextField id={text} />
    );
}

/*;;usage
<TextFieldExample text="username" />
;;*/