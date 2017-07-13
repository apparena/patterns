import React from "react";
import {Button} from "apparena-patterns-react";

export default class MyAwesomeClass extends React.ReactComponent {
    ...
    render() {
        return (
            <Button size="md" type="primary" onClick={::this.doAwesomeStuff}>
                Drück mich!
            </Button>
        )
    }
}