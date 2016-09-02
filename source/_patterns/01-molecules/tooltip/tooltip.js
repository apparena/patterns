import React, {PropTypes} from "react";
import ReactComponent from "../../reactComponent";
import cx from "classnames";

export default class Tooltip extends ReactComponent {
    static propTypes = {
        children: PropTypes.node.isRequired,
    };

    render() {
        return (
            <div data-toggle="tooltip" data-placement="top" title="Tooltip on top" >
                {this.props.children}
            </div>
        );
    }
}