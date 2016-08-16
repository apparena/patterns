import React, {PropTypes} from "react";
import ReactComponent from "../../reactComponent";

export default class CardsList extends ReactComponent {

    render() {
        return (
            <div className="t-col-main-content p-a-1" key={this.getUniqueKey()}>
                <div className="t-entity-list" key={this.getUniqueKey()}>
                    <div className="card-deck" key={this.getUniqueKey()}>
                        {this.getChildrenArray(this.props.children)}
                    </div>
                </div>
            </div>
        )
    }
}