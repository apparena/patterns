import React from 'react';
import {Nav, NavItem} from 'apparena-patterns-react';

export default class MyAwesomeClass extends React.Component{
    render(){
        return(
            <Nav >
                <NavItem vertical pills>
                    <a>Rock</a>
                </NavItem>
                <NavItem>
                    <a>Electro</a>
                </NavItem>
                <NavItem>
                    <a>Indie</a>
                </NavItem>
            </Nav>  
        )
    }
}