import React, {PropTypes} from "react";
import ReactComponent from "../../reactComponent";

export default class ButtonGroup extends ReactComponent {
    static propTypes = {
        ariaLabel: PropTypes.string
    };

    static defaultProps = {
        ariaLabel: "Submit",
    };

    render() {
        return (
            <div className="btn-group" role="group" aria-label={this.props.ariaLabel}>
                {this.getChildrenArray(this.props.children)}
            </div>
        )
    }
}