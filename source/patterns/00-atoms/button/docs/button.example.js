import React from 'react';
import {Button} from 'apparena-patterns-react';

export default function ButtonExample() {
    return (
        <div>
            <Button type="primary">
                Primary
            </Button>
            <Button type="secondary">
                Secondary
            </Button>
            <Button type="success">
                Success
            </Button>
            <Button type="link">
                Link
            </Button>
            <hr/>
            <Button id="withId" type="secondary">
                Button with ID
            </Button>
        </div>
    );
}