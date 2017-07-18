import React from 'react';
import {ProgressBar} from 'apparena-patterns-react';

export default function ProgressBarExample(){
    return(
        <ProgressBar
        value="60"
        maxValue="100"
        minWidth="4"
        type="danger"
        striped />
        )
}

/*;;usage
<ProgressBarExample />
;;*/