import React, {PropTypes} from "react";
import ReactComponent from "../../reactComponent";
import cx from "classnames"

export default class Dropdown extends ReactComponent {
    static propTypes = {
        dropdown: PropTypes.shape({
            class: PropTypes.string,
            btnCaption: PropTypes.string,
            btnClass: PropTypes.string,
            header: PropTypes.oneOfType([
                PropTypes.bool,
                PropTypes.string
            ]),
            menuClass: PropTypes.string,
            items: PropTypes.arrayOf(
                PropTypes.shape({
                    class: PropTypes.string,
                    text: PropTypes.string,
                    url: PropTypes.oneOfType([
                        PropTypes.string,
                        PropTypes.bool
                    ])
                })
            )
        })
    };

    _renderItems() {
        if (this.props.dropdown.items.length) {
            var heading = "";
            if (this.props.dropdown.header) {
                heading = (<h6 className="dropdown-header">{this.props.header}</h6>);
            }
            return (
                <ul className={this.props.dropdown.menuClass} aria-labelledby="dropdownMenu1">
                    {heading}
                    {this.props.dropdown.items.map((item, index) => {
                            return this.getListItem(item, index);
                        }
                    )}
                </ul>
            )
        }
    }

    getListItem(item, index) {
        if (item.text || item.url) {
            if(item.url === false)
            {
                item.url = '#';
            }
            return (
                <li className={item.class} key={index}>
                    <a href={item.url} dangerouslySetInnerHTML={{__html: item.text}}/>
                </li>
            )
        }
        else {
            return(
                <li className={item.class} key={index}>
                    <a href="#"/>
                </li>
            )
        }
    }

    render() {
        return (
            <div className={cx("dropdown", this.props.dropdown.class)}>
                <button className={cx("btn", this.props.dropdown.btnClass, "dropdown-toggle")} type="button" id="dropdownMenu1"
                        data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    {this.props.dropdown.btnCaption}
                </button>
                {this._renderItems()}
            </div>
        )
    }
}