import "babel-polyfill";
import React from "react";
import {render} from "react-dom";
import {HashRouter, Route} from "react-router-dom";
import Home from "./home";

const MOUNT_NODE = document.getElementById('root');

(function () {
    render(
        <HashRouter>
            <div>
                <Route path="/" component={Home}/>
            </div>
        </HashRouter>,
        MOUNT_NODE
    )
}());