import React from 'react';
import {Nav, NavItem} from 'apparena-patterns-react';

export default function NavExample() {
    return (
        <Nav tabs>
            <NavItem>
                <a>Item 1</a>
            </NavItem>
            <NavItem>
                <a>Numero 2</a>
            </NavItem>
            <NavItem>
                <a>Part 3</a>
            </NavItem>
        </Nav>
    );
}