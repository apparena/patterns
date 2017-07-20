import React from "react";
import {AjaxLoader, ReactComponent} from "apparena-patterns-react";

export default class MyAwesomeClass extends ReactComponent {
    render() {
        return (
            <AjaxLoader resource="Datacluster" onLoadingDone={::this.getStarted} />
        )
    }
}