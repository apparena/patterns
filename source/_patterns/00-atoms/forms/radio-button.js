import React, {PropTypes} from "react";
import ReactComponent from "../../reactComponent";

export default class RadioButton extends ReactComponent {
    static PropTypes = {
        text: PropTypes.string,
        onFilterSelect: PropTypes.func.isRequired,
        checked: PropTypes.bool,
        name: PropTypes.string
    };

    static defaultProps = {
        text: "identifier missing!",
        checked: false,
        name: "radioButton"
    };

    onClickingThis(event){
        this.props.onFilterSelect(event, this.props.text);
    }

    render() {
        return (
            <div className="form-check" key={this.getUniqueKey()}>
                <div className="radio">
                    <label className="form-check-label">
                        <input type="radio" onChange={::this.onClickingThis} checked={this.props.checked} name={this.props.name} />
                        {this.props.text}
                    </label>
                </div>
            </div>
        )
    };
}