import React, {PropTypes} from "react";
import ReactComponent from "../../reactComponent";

export default class Button extends ReactComponent {
    static propTypes = {
        text: PropTypes.string,
        title: PropTypes.string,
        buttonClass: PropTypes.string
    };

    render() {
        return (
            <button type="button" className={this.props.buttonClass} title={this.props.title}>
                {this.props.text}
                {this.getChildrenArray(this.props.children)}
            </button>
        )
    }
}