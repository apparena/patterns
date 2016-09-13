import React, {PropTypes} from "react";
import ReactComponent from "../../react-utils/component";

export default class Card extends ReactComponent {
    render() {
        return (
            <div className="card" key={this.getUniqueKey()}>
                {this.getChildrenArray(this.props.children)}
            </div>
        )
    }
}