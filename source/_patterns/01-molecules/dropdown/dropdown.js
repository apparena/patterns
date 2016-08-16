import React, {PropTypes} from "react";
import ReactComponent from "../../reactComponent";

export default class Dropdown extends ReactComponent {
    static propTypes = {
        dropDownClass: PropTypes.string,
        header: PropTypes.string,
        buttonClass: PropTypes.string,
        buttonText: PropTypes.string,
        menuClass: PropTypes.string
    };

    static defaultProps = {
        dropdownClass: "dropdown dropdown",
        buttonClass: "dropdown-toggle btn-secondary btn",
        buttonText: "Buttontext is missing!",
        menuClass: "dropdown-menu dropdown-menu-right"
    };

    render() {
        return (
            <div className={this.props.dropdownClass}>
                <a className={this.props.buttonClass} href="#" type="button" data-toggle="dropdown" aria-expanded="true">
                    {this.props.buttonText}
                </a>
                {this.getChildrenArray(this.props.children)}
            </div>
        )
    }
}