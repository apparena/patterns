import React, {PropTypes} from "react";
import ReactComponent from "../../react-utils/component";

export default class ButtonGroup extends ReactComponent {
    static propTypes = {
        ariaLabel: PropTypes.string
    };

    static defaultProps = {
        ariaLabel: "Submit",
    };

    render() {
        return (
            <div className="btn-group" role="group">
                {this.getChildrenArray(this.props.children)}
            </div>
        )
    }
}