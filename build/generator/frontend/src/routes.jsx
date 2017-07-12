import React from "react";
import {Route} from "react-router";
import Home from "./home";

export default (
    <Route path="/" component={Home}>
        <Route path="/:component" component={Home}/>
    </Route>
)