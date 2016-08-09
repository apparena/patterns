import React, {PropTypes} from "react";
import ReactComponent from "../../reactComponent";

export default class Button extends ReactComponent {
    static propTypes = {
        button: PropTypes.shape({
            btnText: PropTypes.string,
            btnTitle: PropTypes.string,
            btnClass: PropTypes.string
        }).isRequired
    };

    buttonProps = {
        class : '',
        title : '',
        text : ''
    };

    checkProps() {
        if(this.props.button.btnClass)
        {
            this.buttonProps.class = this.props.button.btnClass;
        }
        if(this.props.button.btnTitle)
        {
            this.buttonProps.title = this.props.button.btnTitle;
        }
        if(this.props.button.btnText)
        {
            this.buttonProps.text = this.props.button.btnText;
        }
    };

    render(){
        this.checkProps();
        return(
            <button type="button" className={this.buttonProps.class} title={this.buttonProps.title}>
                <div dangerouslySetInnerHTML={{__html: this.buttonProps.text}}/>
            </button>
        )
    }
}