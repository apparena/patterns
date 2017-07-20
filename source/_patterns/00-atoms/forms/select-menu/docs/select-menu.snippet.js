import React from "react";
import {SelectMenu, ReactComponent} from "apparena-patterns-react";

export default class MyAwesomeClass extends ReactComponent {
    render() {
        return (
            <SelectMenu onChange={::this.change} options={["action","sci-fi","western"]} />
        )
    }
}