import React, {PropTypes} from "react";
import ReactComponent from "../../../react-utils/component";
import Dropdown from "../../../01-molecules/dropdown/dropdown";
import ButtonGroup from "../../../01-molecules/button-group/button-group";
import Icon from "../../../00-atoms/icons/icons";
import Input from "../../../00-atoms/forms/input";
import Button from "../../../00-atoms/button/button";
import CheckBox from "../../../00-atoms/forms/checkbox";
import RadioButton from "../../../00-atoms/forms/radio-button";
import cx from "classnames";

export default class FilterBar extends ReactComponent {

    static PropTypes = {
        filter: PropTypes.shape({
            onFilter: PropTypes.func.isRequired,
            buttonText: PropTypes.string,
            status: PropTypes.object,
            groups: PropTypes.arrayOf(PropTypes.shape({
                type: PropTypes.oneOf(['radiobutton', 'checkbox' /*,'custom'*/]).isRequired,
                options: PropTypes.arrayOf(PropTypes.shape({
                    text: PropTypes.string.isRequired,
                    identifier: PropTypes.string.isRequired,
                    default: PropTypes.bool
                })).isRequired
            }).isRequired).isRequired
        }),
        input: PropTypes.shape({
            status: PropTypes.shape({
                inputValue: PropTypes.string.isRequired
            }).isRequired,
            onInput: PropTypes.func.isRequired,
            placeholder: PropTypes.string.isRequired,
            debounce: PropTypes.number,
            loading: PropTypes.bool,
            autoFocus: PropTypes.bool
        }),
        listStyle: PropTypes.shape({
            onStyle: PropTypes.func.isRequired,
            onSort: PropTypes.func.isRequired,
            default: PropTypes.oneOf(['cards', 'table']),
            status: PropTypes.shape({
                listStyle: PropTypes.bool.isRequired,
                sort: PropTypes.object,
            }).isRequired,
            table: PropTypes.shape({
                text: PropTypes.string.isRequired,
                identifier: PropTypes.string.isRequired,
                column: PropTypes.arrayOf(PropTypes.shape({
                    text: PropTypes.string.isRequired,
                    sortable: PropTypes.bool.isRequired,
                    identifier: PropTypes.string,
                    default: PropTypes.oneOf(['ASC', 'DESC'])
                })).isRequired,
            }),
            cards: PropTypes.shape({
                text: PropTypes.string.isRequired,
                identifier: PropTypes.string.isRequired,
                sort: PropTypes.arrayOf(PropTypes.shape({
                    text: PropTypes.string.isRequired,
                    identifier: PropTypes.string.isRequired,
                    default: PropTypes.oneOf(['ASC', 'DESC'])
                })),
            })
        }).isRequired
    };

    createDropdownItems() {
        var container = [];
        var key;
        {
            this.props.listStyle.cards.sort.map((item, index) => {
                var i;
                for (i = 0; i < 4; i++) {
                    let classNameString = '';
                    switch (i) {
                        case 0:
                            container.push(<h6 className="dropdown-header" key={this.getUniqueKey()}>{item.text}</h6>);
                            break;
                        case 1:
                            if (this.props.listStyle.status.sort[item.identifier] === null) classNameString = "dropdown-item";
                            else classNameString = cx("dropdown-item", this.props.listStyle.status.sort[item.identifier] ? '' : "active");
                            container.push(
                                <li className={classNameString} key={this.getUniqueKey()}>
                                    <a href="#" key={this.getUniqueKey()}
                                       onClick={this.onSortChangeHandler.bind(this, item.identifier)}>
                                        <Icon name="sort-amount-desc" key={key}/>absteigend
                                        {this.props.selected && <Icon class="fa check-square-o" key={key}/>}
                                    </a>
                                </li>
                            );
                            break;
                        case 2:
                            if (this.props.listStyle.status.sort[item.identifier] === null) classNameString = "dropdown-item";
                            else classNameString = cx("dropdown-item", this.props.listStyle.status.sort[item.identifier] ? "active" : '');
                            container.push(
                                <li className="dropdown-item" key={this.getUniqueKey()}>
                                    <a href="#" key={this.getUniqueKey()}
                                       onClick={this.onSortChangeHandler.bind(this, item.identifier)}>
                                        <Icon name="sort-amount-asc" key={this.getUniqueKey()}/>aufsteigend
                                    </a>
                                </li>
                            );
                            break;
                        case 3:
                            if (index != (this.props.listStyle.cards.sort.length - 1)) {
                                container.push(
                                    <li className="dropdown-divider" key={this.getUniqueKey()}/>
                                );
                            }
                            break;
                    }
                }
            })
        }
        return (
            <ul className={this.props.listStyle.cards.menuClass ? this.props.listStyle.cards.menuClass : "dropdown-menu dropdown-menu-right"}
                key={this.getUniqueKey()}>
                {container}
            </ul>
        )
    };

    onFilterChangeHandler(identifier, event) {
        this.props.filter.onFilter(identifier, event);
    }

    onSortChangeHandler(identifier, event) {
        this.props.listStyle.onSort(identifier, event);
    }

    onStyleChangeHandler(identifier, event) {
        this.props.listStyle.onStyle(identifier, event);
    }

    createFilterElements() {
        var container = [];
        this.props.filter.groups.map((item) => {
            switch (item.type) {
                case 'checkbox':
                    let checkboxes = [];
                    item.options.map((element) => {
                        checkboxes.push(
                            <div>
                                <CheckBox key={this.getUniqueKey()}
                                          onChange={this.onFilterChangeHandler.bind(this, element.identifier)}
                                          checked={this.props.filter.status[element.identifier]}/>
                                <label>{element.text}</label>
                            </div>
                        );
                    });
                    container.push(
                        <div className="col-md-4" key={this.getUniqueKey()}>
                            <div className="checkboxes">
                                {checkboxes}
                            </div>
                        </div>
                    );
                    break;
                case 'radiobutton':
                    let radiobuttons = [];
                    item.options.map((element) => {
                        radiobuttons.push(
                            <RadioButton text={element.text} key={this.getUniqueKey()}
                                         onClick={this.onFilterChangeHandler.bind(this, element.identifier)}
                                         checked={this.props.filter.status[element.identifier]}/>
                        );
                    });
                    container.push(
                        <div className="col-md-4" key={this.getUniqueKey()}>
                            {radiobuttons}
                        </div>
                    );
                    break;
                default:
                    break;
            }
        });

        return (
            container
        )
    }

    createStyleButtons() {
        if (this.props.listStyle.table && this.props.listStyle.cards) {
            return (
                <div className="filter-bar-display-mode">
                    <ButtonGroup>
                        <Button className="btn  btn-secondary" title={this.props.listStyle.cards.text}
                                onClick={this.onStyleChangeHandler.bind(this, "cards")}
                                active={this.props.listStyle.status.type}>
                            <Icon name="th"/>
                        </Button>
                        <Button className="btn  btn-secondary" title={this.props.listStyle.table.text}
                                onClick={this.onStyleChangeHandler.bind(this, "table")}
                                active={!this.props.listStyle.status.type}>
                            <Icon name="th-list"/>
                        </Button>
                    </ButtonGroup>
                </div>
            );
        }
    }

    render() {
        return (
            <div key={this.getUniqueKey()}>
                <div className="filter-bar p-1">
                    {(this.props.filter.groups.length >= 1) &&
                    <div className="filter-bar-filter mr-1">
                        <a className={this.props.filter.buttonClass ? this.props.filter.buttonClass : "btn btn-primary collapsed"}
                           onClick={this.onFilterChangeHandler.bind(this, "toggle")}
                           href="#collapseFilter"
                        >
                            <Icon name="filter"/>
                            {this.props.filter.buttonText ? this.props.filter.buttonText : " Filter"}
                        </a>
                    </div>}
                    <div className="filter-bar-search mr-1">
                        <div className="input-group" key={this.getUniqueKey()}>
                        <span className="input-group-addon" key="loading-icon">
                            {this.props.input.loading ?
                                <span className="filter-bar-search-spinner text-muted" key="loader-span">
                                    <Icon name="refresh" spin key="currently-loading"/>
                                </span> :
                                <Icon name="search" key="not-loading"/>
                            }
                        </span>
                            <Input type="text" inputClass="form-control" placeholder={this.props.input.placeholder}
                                   onChange={this.props.input.onInput} defaultValue={this.props.input.status.inputValue}
                                   autoFocus={this.props.input.autoFocus}/>
                            {this.props.txtSearchAddon &&
                            <span className="input-group-addon">
                                {this.props.txtSearchAddon}
                                </span>
                            }
                        </div>
                    </div>
                    {this.props.listStyle.status.type ?
                        <div className="filter-bar-sort mr-1" key={this.getUniqueKey()}>
                            <Dropdown dropdownClass="dropdown dropdown" buttonClass="btn btn-secondary dropdown-toggle"
                                      buttonText={this.props.listStyle.cards.buttonText ? this.props.listStyle.cards.buttonText : "Sortierung"}>
                                {this.createDropdownItems()}
                            </Dropdown>
                        </div> :
                        null
                    }
                    {this.createStyleButtons()}
                </div>
                {this.props.filter &&
                <div className={cx("collapse", this.props.filter.status.expanded ? "in" : "")} id="collapseFilter"
                     style={this.props.filter.status.expanded ? {} : {height: 0}}
                     key={this.getUniqueKey()}>
                    <div className="card card-block">
                        <div className="row">
                            {this.createFilterElements()}
                        </div>
                    </div>
                </div>}
            </div>
        )
    }
}