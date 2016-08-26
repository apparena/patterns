import React from "react"
import { render } from "react-dom"
import Alert from "../_patterns/01-molecules/alert/alert"

render(<Alert classNames="test test2" type="danger" text="This is an alert!" />, document.getElementById("component"));
