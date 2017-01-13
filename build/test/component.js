import React from "react";
import {render} from "react-dom";
import {ReactComponent, PriceTable} from "../../source/_patterns/index";

class Test extends ReactComponent {
    getInitState() {
        return {
            value: []
        }
    }

    handleOnChange(value) {
        this.setState({value});
    }

    render() {
        return (
            <div>
                <PriceTable />
            </div>
        );
    }
}


render(<Test />, document.getElementById("component"));
