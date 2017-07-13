import React from "react";
import {AjaxLoader} from "apparena-patterns-react";

export default function AjaxLoaderExample({resource}) {
    return (
        <AjaxLoader resource={resource} onLoadingDone={::this.finished} />
    );
}

/*;;usage
<AjaxLoaderExample resource="?" />
;;*/