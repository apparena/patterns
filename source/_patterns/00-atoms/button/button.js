import React, {PropTypes} from "react";
import ReactComponent from "../../reactComponent";

export default class Button extends ReactComponent {
    static propTypes = {
        button: PropTypes.shape({
            btnText: PropTypes.string,
            btnTitle: PropTypes.string,
            btnClass: PropTypes.string
        })
    };

    render(){
        return(
            <button type="button" className={this.props.button.btnClass} title={this.props.button.btnTitle}>
                <div dangerouslySetInnerHTML={{__html: this.props.button.btnText}}/>
            </button>
        )
    }
}