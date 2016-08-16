import React, {PropTypes} from "react";
import ReactComponent from "../../reactComponent";

export default class Icon extends ReactComponent {
    static PropTypes = {
        iconClass: PropTypes.string.isRequired
    };

    render(){
        return(
            <i
                className={this.props.iconClass}
            />
        );
    }
}
