import React from "react";
import {AjaxLoader} from "apparena-patterns-react";

export default function AjaxLoaderExample() {
    return (
        <AjaxLoader resource="?" onLoadingDone={::this.finished} />
    );
}