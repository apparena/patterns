import React, {PropTypes} from "react";
import ReactComponent from "../../reactComponent";

export default class TextField extends ReactComponent {
    static propTypes = {
        placeholder: PropTypes.string,
        id: PropTypes.string.isRequired,
        onChangeFunction: PropTypes.func,
        classNames: PropTypes.string,
    };

    render() {
        return (
            <input className={this.props.classNames} id={this.props.id} type="text" placeholder={this.props.placeholder} onChange={this.props.onChangeFunction}/>
        );
    }
}