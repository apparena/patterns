import "babel-polyfill";
import React from "react";
import {render} from "react-dom";
import {Router, browserHistory} from "react-router";
import routes from "./routes";

const MOUNT_NODE = document.getElementById('root');

(function() {
    render(
        <Router history={browserHistory} routes={routes}/>,
        MOUNT_NODE
    )
}());