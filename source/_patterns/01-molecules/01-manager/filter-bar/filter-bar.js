import React, {PropTypes} from "react";
import ReactComponent from "../../../reactComponent";
import Dropdown from "../../../01-molecules/dropdown/dropdown"
import ButtonGroup from "../../../01-molecules/button-group/button-group"
 
export default class FilterBar extends ReactComponent {
    static propTypes = {
        filterBar: PropTypes.shape({
            displayModeActivated: PropTypes.shape({
                btnGroup: PropTypes.shape({
                    items: PropTypes.arrayOf(PropTypes.shape({
                        btnText: PropTypes.string,
                        btnTitle: PropTypes.string,
                        btnClass: PropTypes.string
                    }))
                })
            }),
            filtersActivated: PropTypes.shape({
                items: PropTypes.arrayOf(
                    PropTypes.shape({
                        type: PropTypes.string,
                        title: PropTypes.string,
                        checkboxes: PropTypes.oneOfType([
                            PropTypes.bool,
                            PropTypes.shape({
                                items: PropTypes.arrayOf(
                                    PropTypes.shape({
                                        isChecked: PropTypes.bool,
                                        label: PropTypes.string,
                                        name: PropTypes.string
                                    })
                                )
                            })
                        ]),
                        radioButtons: PropTypes.oneOfType([
                            PropTypes.bool,
                            PropTypes.shape({
                                items: PropTypes.arrayOf(
                                    PropTypes.shape({
                                        isChecked: PropTypes.bool,
                                        label: PropTypes.string,
                                        name: PropTypes.string
                                    })
                                )
                            })
                        ])
                    })
                )
            }),
            searchActivated: PropTypes.oneOfType([
                PropTypes.bool,
                PropTypes.shape({
                    inputAddonBefore: PropTypes.string,
                    placeholder: PropTypes.string
                })
            ]),
            sortActivated: PropTypes.shape({
                dropdown: PropTypes.shape({
                    class: PropTypes.string,
                    btnCaption: PropTypes.string,
                    btnClass: PropTypes.string,
                    header: PropTypes.oneOfType([
                        PropTypes.string,
                        PropTypes.bool
                    ]),
                    menuClass: PropTypes.string,
                    items: PropTypes.arrayOf(
                        PropTypes.shape({
                            class: PropTypes.string,
                            text: PropTypes.string,
                            url: PropTypes.oneOfType([
                                PropTypes.bool,
                                PropTypes.string
                            ])
                        })
                    )
                })
            })
        })
    };

    _renderFilterButton() {
        if (this.props.filterBar.filtersActivated) {
            return (
                <div className="filter-bar-filter m-r-1">
                    <button className="btn btn-secondary">
                        <i className="fa fa-filter"/>
                    </button>
                </div>
            )
        }
    }

    _renderSearchBar() {
        if (this.props.filterBar.searchActivated) {
            return (
                <div className="filter-bar-search m-r-1">
                    <div className="input-group">
                        <span className="input-group-addon"> <p dangerouslySetInnerHTML={{__html: this.props.filterBar.searchActivated.inputAddonBefore}}/> </span>
                        <input type="text" className="form-control" placeholder={this.props.filterBar.searchActivated.placeholder}/>
                    </div>
                </div>
            )
        }
    }

    _renderDropDown() {
         if (this.props.filterBar.sortActivated) {
            return (
                <div className="filter-bar-sort m-r-1">
                    <Dropdown
                        dropdown={this.props.filterBar.sortActivated.dropdown}
                    />
                </div>
            )
        }
    }

    _renderStyleButtons() {
        if (this.props.filterBar.displayModeActivated) {
            if (this.props.filterBar.displayModeActivated.btnGroup) {
                return(
                    <div className="filter-bar-display-mode">
                        <ButtonGroup
                            buttonGroup={this.props.filterBar.displayModeActivated.btnGroup}
                        />
                    </div>
                )
            }
        }
    }
    
    render() {
        return (
            <div className="filter-bar p-a-1">
                {this._renderFilterButton()}
                {this._renderSearchBar()}
                {this._renderDropDown()}
                {this._renderStyleButtons()}
            </div>
        )
    }
}