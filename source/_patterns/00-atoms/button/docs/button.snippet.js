import React from "react";
import {Button, ReactComponent} from "apparena-patterns-react";

export default class MyAwesomeClass extends ReactComponent {
    render() {
        return (
            <Button size="md" type="primary" onClick={::this.doAwesomeStuff}>
                Drück mich!
            </Button>
        )
    }
}