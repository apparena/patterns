import React from "react";
import {ButtonGroup, ReactComponent} from "apparena-patterns-react";

export default class MyAwesomeClass extends ReactComponent {
    render() {
        return (
            <ButtonGroup>
                <Button type="default">One</Button>
                <Button type="warning">Two</Button>
                <Button type="secondary">Three</Button>
            </ButtonGroup>
        )
    }
}