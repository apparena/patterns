import React from 'react';
import {Button, Portal} from 'apparena-patterns-react';

export default function PortalExample() {
    return (
        <Portal
            attachToNode={document.getElementById('root')}
        >
            <div style={{position: 'fixed', top: 0, right: 0, zIndex: 200}}>
                <Button
                    type="outline-primary"
                >
                    My Portal Button
                </Button>
            </div>
        </Portal>
    );
}