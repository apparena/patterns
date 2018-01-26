import React from 'react';
import {Alert} from 'apparena-patterns-react';

export default function AlertExample() {
    return (
        <Alert
            type="warning"
            dismissible
        >
            Hey this is a dismissible alert
        </Alert>
    );
}

/*;;usage
<AlertExample />
;;*/