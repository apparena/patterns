import React from "react";
import {SelectMenu} from "apparena-patterns-react";

export default class MyAwesomeClass extends React.ReactComponent {
    ...
    render() {
        return (
            <SelectMenu onChange={::this.change} options:{["action","sci-fi","western"]} />
        )
    }
}