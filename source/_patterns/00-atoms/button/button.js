import React, {PropTypes} from "react";
import ReactComponent from "../../reactComponent";

export default class Button extends ReactComponent {
    static propTypes = {
        btnText: PropTypes.string,
        btnTitle: PropTypes.string,
        btnClass: PropTypes.string
    };

    render() {
        return (
            <button type="button" className={this.props.btnClass} title={this.props.btnTitle}>
                {this.props.btnText}
            </button>
        )
    }
}