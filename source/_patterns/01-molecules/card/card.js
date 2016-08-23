import React, {PropTypes} from "react";
import ReactComponent from "../../reactComponent";

export default class Card extends ReactComponent {
    render() {
        return (
            <div className="card" key={this.getUniqueKey()}>
                {this.getChildrenArray(this.props.children)}
            </div>
        )
    }
}