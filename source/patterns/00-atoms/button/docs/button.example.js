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
            <Button type="link">
                Link
            </Button>
        </div>
    );
}