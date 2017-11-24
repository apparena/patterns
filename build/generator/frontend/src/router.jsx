import React from "react";
import {HashRouter, Route} from "react-router-dom";
import Home from "./home";

export default function Router() {
    return (
        <HashRouter>
            <div>
                <Route path="/" component={Home}/>
            </div>
        </HashRouter>
    );
}