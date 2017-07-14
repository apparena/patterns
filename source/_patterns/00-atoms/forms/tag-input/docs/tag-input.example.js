import React from "react";
import {TagInput} from "apparena-patterns-react";

export default function TagInputExample({text}) {
    return (
        <TagInput onChange={::this.change} options:{["action","sci-fi","western"]} />
    );
}

/*;;usage
<TagInputExample />
;;*/