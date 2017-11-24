import "babel-polyfill";
import React from "react";
import {render} from "react-dom";
import Router from "./router";

const MOUNT_NODE = document.getElementById('root');

(function () {
    render(
        <Router />,
        MOUNT_NODE
    )
}());