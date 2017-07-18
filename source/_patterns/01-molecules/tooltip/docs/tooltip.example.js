import React from 'react';
import {Tooltip} from 'apparena-patterns-react';

export default function TooltipExample(){
    return(
        <Tooltip label="Hello World! This is Tooltip" positioning="right">
            <Button>Hover Over Me</Button>
        </Tooltip>
        )
}

/*;;usage
<TooltipExample />
;;*/