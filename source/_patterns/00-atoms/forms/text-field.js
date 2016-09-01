import React, {PropTypes} from "react";
import ReactComponent from "../../reactComponent";

export default class TextField extends ReactComponent {
    static propTypes = {
        placeholder: PropTypes.string,
        id: PropTypes.string.isRequired,
        onChangeFunction: PropTypes.func,
    };

    render() {
        return (
            <input id={this.props.id} type="text" placeholder={this.props.placeholder} onChange={this.props.onChangeFunction}/>
        );
    }
}