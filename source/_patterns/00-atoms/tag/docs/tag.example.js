import React from "react";
import {Tag} from "apparena-patterns-react";

export default function TagExample({text}) {
    return (
        <Tag type="primary" pill="true">
            {text}
        </Tag>
    );
}

/*;;usage
<TagExample text="i'm a pill" />
;;*/