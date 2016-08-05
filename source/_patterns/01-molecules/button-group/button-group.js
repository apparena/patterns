import React, {PropTypes} from "react";
import ReactComponent from "../../reactComponent";
import Button from "../../00-atoms/button/button"

export default class ButtonGroup extends ReactComponent {
    static propTypes = {
        buttonGroup: PropTypes.shape({
            ariaLabel: PropTypes.string,
            items: PropTypes.arrayOf(
                PropTypes.shape({
                    btnText: PropTypes.string,
                    btnClass: PropTypes.string,
                    btnTitle: PropTypes.string
                })
            )
        })
    };

    _renderItems() {
        if (this.props.buttonGroup.items.length) {
            return (
                this.props.buttonGroup.items.map((item, index) => {
                    return (
                        <Button button={item} key={index}/>
                    )
                })
            )
        }
    }

    render() {
        return (
            <div className="btn-group" role="group" aria-label={this.props.buttonGroup.ariaLabel}>
                {this._renderItems()}
            </div>
        )
    }
}