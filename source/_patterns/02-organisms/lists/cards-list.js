import React, {PropTypes} from "react";
import ReactComponent from "../../react-utils/component";

export default class CardsList extends ReactComponent {
    static propTypes = {
        children: PropTypes.oneOfType([
            PropTypes.element,
            PropTypes.arrayOf(PropTypes.element)
        ]).isRequired
    };

    render() {
        return (
            <div className="t-col-main-content p-1">
                <div className="t-entity-list">
                    <div className="card-deck">
                        {this.getChildrenArray(this.props.children)}
                    </div>
                </div>
            </div>
        )
    }
}