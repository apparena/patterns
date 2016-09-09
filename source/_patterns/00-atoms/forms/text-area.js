import React, {PropTypes} from "react";
import ReactComponent from "../../reactComponent";

export default class TextArea extends ReactComponent {
    static propTypes = {
        placeholder: PropTypes.string,
        onChangeFunction: PropTypes.func,
        id: PropTypes.string,
        classNames: PropTypes.string,
    };

    render() {
        return (
            <textarea className={this.props.classNames} id={this.props.id} placeholder={this.props.placeholder} onChange={this.props.onChangeFunction}/>
        );
    }
}