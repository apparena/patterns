import React from 'react';
import {Navbar} from 'apparena-patterns-react';

export default class MyAwesomeClass extends React.Component{
    render(){
        return(
            <Navbar 
                children={["Home", "Shop", "Contact"]}
                bg="primary" />
        )
    }
}