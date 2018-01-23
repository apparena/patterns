import "babel-polyfill";
import React from "react";
import {render} from "react-dom";
import {HashRouter, Route} from "react-router-dom";
import {AppContainer} from 'react-hot-loader';
import Home from "./home";

const MOUNT_NODE = document.getElementById('root');

function renderApp() {
    render(
        <AppContainer>
            <HashRouter>
                <div>
                    <Route path="/" component={Home}/>
                </div>
            </HashRouter>
        </AppContainer>,
        MOUNT_NODE
    )
}

renderApp();

if (module.hot) {
    module.hot.accept('./home', () => {
        renderApp();
    })
}