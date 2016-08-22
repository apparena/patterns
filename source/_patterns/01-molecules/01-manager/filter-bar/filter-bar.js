import React, {PropTypes} from "react";
import ReactComponent from "../../../reactComponent";
import Dropdown from "../../../01-molecules/dropdown/dropdown";
import ButtonGroup from "../../../01-molecules/button-group/button-group";
import Icon from "../../../00-atoms/icons/icons";
import Input from "../../../00-atoms/forms/input";
import Button from "../../../00-atoms/button/button";
import cx from "classnames";

export default class FilterBar extends ReactComponent {

    static PropTypes = {
        txtFilterButton: PropTypes.string,
        txtSearchPlaceholder: PropTypes.string,
        txtSearchAddon: PropTypes.string,
        txtSortButton: PropTypes.string,
        txtSortHeader: PropTypes.array,
        menuClass: PropTypes.string,
        onClickFilterButton: PropTypes.func.isRequired,
        expanded: PropTypes.bool,
        buttonClass: PropTypes.string,
        collapseClass: PropTypes.string,
        style: PropTypes.string,
    };

    static defaultProps = {
        txtFilterButton: "Filter",
        txtSearchPlaceholder: "Search for ...",
        txtSearchAddon: "",
        txtSortButton: "Sort list",
        txtSortHeader: ["Category 1", "Category 2"],
        menuClass: "dropdown-menu dropdown-menu-right",
        expanded: false,
        buttonClass: "btn btn-primary collapsed",
        collapseClass: "collapse",
        style: "height: 0px;",
    };

    createDropdownItems() {
        var container =[];
        var key;
        {this.props.txtSortHeader.map((header, index) => {
            var i;
            for (i = 0; i < 4; i++) {
                switch (i) {
                    case 0:
                        container.push(<h6 className="dropdown-header" key={this.getUniqueKey()}>{header}</h6>);
                        break;
                    case 1:
                        container.push(
                            <li className="dropdown-item" key={this.getUniqueKey()}>
                                <a href="#" key={this.getUniqueKey()}>
                                    <Icon class="fa fa-sort-amount-desc" key={key}/>absteigend
                                </a>
                            </li>
                        );
                        break;
                    case 2:
                        container.push(
                            <li className="dropdown-item" key={this.getUniqueKey()}>
                                <a href="#" key={this.getUniqueKey()}>
                                    <Icon class="fa fa-sort-amount-asc" key={this.getUniqueKey()}/>aufsteigend
                                </a>
                            </li>
                        );
                        break;
                    case 3:
                        if(index != (this.props.txtSortHeader.length - 1))
                        {
                            container.push(
                                <li className="dropdown-divider" key={this.getUniqueKey()}/>
                            );
                        }
                        break;
                }
            }
        })}
        return (
            <ul className={this.props.menuClass} key={this.getUniqueKey()}>
                {container}
            </ul>
        )
    };

    render() {
        return (
            <div className="filter-bar p-a-1">
                <div className="filter-bar-filter m-r-1">
                    <a className={this.props.buttonClass} onClick={this.props.onClickFilterButton} data-toggle="collapse" href="#collapseFilter" aria-expanded={this.props.expanded} aria-controls="collapseFilter">
                        <Icon iconClass="fa fa-filter"/>
                        {this.props.txtFilterButton}
                    </a>
                </div>
                <div className={this.props.collapseClass} id="collapseFilter" style={this.props.style} aria-expanded={this.props.expanded}>
                    <div className="card card-block">
                        content
                    </div>
                </div>
                <div className="filter-bar-search m-r-1">
                    <div className="input-group">
                        <span className="input-group-addon">
                            <Icon iconClass="fa fa-search"/>
                        </span>
                        <Input type="text" inputClass="form-control" placeholder={this.props.txtSearchPlaceholder}/>
                        <span className="input-group-addon">
                            {this.props.txtSearchAddon}
                        </span>
                    </div>
                </div>
                <div className="filter-bar-sort m-r-1">
                    <Dropdown dropdownClass="dropdown dropdown" buttonClass="btn btn-secondary dropdown-toggle" buttonText={this.props.txtSortButton}>
                        {this.createDropdownItems()}
                    </Dropdown>
                </div>
                <div className="filter-bar-display-mode">
                    <ButtonGroup>
                        <Button buttonClass="btn  btn-secondary" title="Rasterdarstellung">
                            <Icon iconClass="fa fa-th"/>
                        </Button>
                        <Button buttonClass="btn  btn-secondary" title="Listendarstellung">
                            <Icon iconClass="fa fa-th-list"/>
                        </Button>
                    </ButtonGroup>
                </div>
            </div>
        )
    }
}