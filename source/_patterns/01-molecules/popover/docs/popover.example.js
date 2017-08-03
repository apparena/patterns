import React from 'react';
import {Button, PopOver} from 'apparena-patterns-react';

export default function PopOverExample() {
    return (
        <PopOver
            title="OverPop"
            content="Suprise, you opened the Popover, to close it just press the button again"
            positioning="left">
            <Button>Just Push Me</Button>
        </PopOver>
    );
}

/*;;usage
<PopOverExample />
;;*/