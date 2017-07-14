import React from 'react';
import {NavItem} from 'apparena-patterns-react';

export default function NavItemExample(){
    return(
        <NavItem dropdown>
            <a>Action</a>
            <a>More Action</a>
            <a>Even More Action</a>
        </NavItem>
    )
}

/*;;usage
<NavItemExample />
;;*/