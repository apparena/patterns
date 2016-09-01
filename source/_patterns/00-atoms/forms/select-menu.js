import React, {PropTypes} from "react";
import ReactComponent from "../../reactComponent";

export default class SelectMenu extends ReactComponent {
    static propTypes = {
        options: PropTypes.array.isRequired,
        id: PropTypes.string.isRequired,
        label: PropTypes.string,
        onChangeFunction: PropTypes.func,
    };

    render() {
        return (
            <select id={this.props.id} onChange={this.props.onChangeFunction}>
                <optgroup label={this.props.label}>
                    {this.props.options.map((option, i) => {
                        return <option value={option} key={i}>{option}</option>;
                    })}
                </optgroup>
            </select>
        );
    }
}