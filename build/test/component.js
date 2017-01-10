import React from "react";
import {render} from "react-dom";
import {ReactComponent, TagInput} from "../../source/_patterns/index";

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
            <TagInput
                multi
                options={[]}
                value={this.state.value}
                onChange={::this.handleOnChange}
            />
        );
    }
}


render(<Test />, document.getElementById("component"));
