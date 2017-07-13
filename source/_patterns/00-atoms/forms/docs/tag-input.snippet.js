import React from "react";
import {TagInput} from "apparena-patterns-react";

export default class MyAwesomeClass extends React.ReactComponent {
    ...
    render() {
        return (
            <TagInput onChange={::this.change} options:{["action","sci-fi","western"]} />
        )
    }
}