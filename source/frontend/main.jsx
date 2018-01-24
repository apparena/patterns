import "babel-polyfill";
import React from "react";
import {render} from "react-dom";
import HotRouter from "./hot-router";

const MOUNT_NODE = document.getElementById('root');

render(<HotRouter />, MOUNT_NODE);
