import React from "react";
import {TextArea} from "apparena-patterns-react";

export default function TextAreaExample({text}) {
    return (
        <TextArea placeholder={text} />
    );
}

/*;;usage
<TextAreaExample text="I'm a text area" />
;;*/