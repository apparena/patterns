import React from 'react';
import {Button, ButtonGroup} from 'apparena-patterns-react';

export default function ButtonGroupExample() {
    return (
        <ButtonGroup>
            <Button type="default">One</Button>
            <Button type="warning">Two</Button>
            <Button type="secondary">Three</Button>
        </ButtonGroup>
    );
}