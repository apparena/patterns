import React from "react";
import PropTypes from "prop-types";
import ReactComponent from "./component";

export default class OverlaysContainer extends ReactComponent {
    static propTypes = {
        modals: PropTypes.array.isRequired
    };

    render() {
        return (
            <div>
                {this.props.modals.map(this.renderOverlay, this)}
            </div>
        );
    }

    renderOverlay(overlay, key) {
        return React.cloneElement(overlay.component, {key});
    }
}
