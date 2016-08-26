import React, {PropTypes} from "react";
import ReactComponent from "../../reactComponent";

export default class TableList extends ReactComponent {

    render() {
        return (
            <div className="t-col-main-content p-a-1" key={this.getUniqueKey()}>
                <div className="t-entity-list" key={this.getUniqueKey()}>
                    <div className="table" key={this.getUniqueKey()}>
                        {this.getChildrenArray(this.props.children)}
                    </div>
                </div>
            </div>
        )
    }
}
