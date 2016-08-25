import React, {PropTypes} from "react";
import ReactComponent from "../../reactComponent";

export default class CheckBox extends ReactComponent {
    static PropTypes = {
        text: PropTypes.string,
        onFilterSelect: PropTypes.func.isRequired,
        checked: PropTypes.bool
    };

    static defaultProps = {
        text: "identifier missing!",
        checked: false
    };

    onClickingThis(event){
        this.props.onFilterSelect(event, this.props.text);
    }

    render() {
        return (
            <div className="form-check" key={this.getUniqueKey()}>
                <div className="checkbox">
                    <label className="form-check-label">
                        <input type="checkbox" onChange={::this.onClickingThis} checked={this.props.checked} />
                        {this.props.text}
                    </label>
                </div>
            </div>
        )
    };
}
