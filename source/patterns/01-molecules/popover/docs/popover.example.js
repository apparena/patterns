import React from 'react';
import {Button, Popover} from 'apparena-patterns-react';

export default function PopoverExample() {
    return (
        <Popover
            title="OverPop"
            content={<p>Suprise, you opened the Popover, to close it just press the button again</p>}
            positioning="top"
        >
            <Button>Just Push Me</Button>
        </Popover>
    );
}

/*;;usage
<PopOverExample />
;;*/