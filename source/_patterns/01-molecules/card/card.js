import React, {PropTypes} from "react";
import ReactComponent from "../../react-utils/component";

export default class Card extends ReactComponent {
    static propTypes = {
        children: PropTypes.oneOfType([
            PropTypes.element,
            PropTypes.arrayOf(PropTypes.element)
        ]).isRequired
    };
    render() {
        return (
            <div className="card" key={this.getUniqueKey()}>
                {this.getChildrenArray(this.props.children)}
            </div>
        )
    }
}