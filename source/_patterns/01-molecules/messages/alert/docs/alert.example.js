import React from 'react';
import {Alert} from 'apparena-patterns-react';

export default function AlertExample(){
    return(
        <Alert 
        text="Hey this is a dismissible alert" 
        type="warning"
        dismissible/>
    )
}

/*;;usage
<AlertExample />
;;*/