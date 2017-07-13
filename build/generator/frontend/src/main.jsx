import "babel-polyfill";
import React from "react";
import {render} from "react-dom";
import {hashHistory, Router} from "react-router";
import routes from "./routes";

const MOUNT_NODE = document.getElementById('root');

(function () {
    render(
        <Router history={hashHistory} routes={routes}/>,
        MOUNT_NODE
    )
}());