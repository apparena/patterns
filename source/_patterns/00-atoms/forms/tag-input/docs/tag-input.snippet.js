import React from "react";
import {TagInput, ReactComponent} from "apparena-patterns-react";

export default class MyAwesomeClass extends ReactComponent {
    render() {
        return (
            <TagInput onChange={::this.change} options={["action","sci-fi","western"]} />
        )
    }
}