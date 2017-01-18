import React, {PropTypes} from "react";
import ReactComponent from "./component";
import ReactDraggable from "react-draggable";

export default class Draggable extends ReactComponent {
    static propTypes = {
        children: PropTypes.oneOfType([
            PropTypes.element,
            PropTypes.arrayOf(PropTypes.element)
        ]).isRequired,
        handle: PropTypes.string.isRequired
    };

    render() {
        const {handle, children} = this.props;
        return (
            <ReactDraggable
                handle={`.${handle}`}
            >
                {children}
            </ReactDraggable>
        );
    }
}
