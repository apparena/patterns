import React from "react";
import {AjaxLoader} from "apparena-patterns-react";

export default class MyAwesomeClass extends React.ReactComponent {
    ...
    render() {
        return (
            <AjaxLoader resource="Datacluster" onLoadingDone={::this.getStarted} />
        )
    }
}