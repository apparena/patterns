import React from "react";
import {Button} from "apparena-patterns-react";

export default function ButtonExample({text}) {
    return (
        <Button type="primary">
            {text}
        </Button>
    );
}

/*;;usage
<ButtonExample text="Drück mich!" />
;;*/