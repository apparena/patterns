import React, {PropTypes} from "react";
import ReactComponent from "../../react-utils/component";
import styles from "./button-group.scss";

export default class ButtonGroup extends ReactComponent {
    static propTypes = {
        children: PropTypes.node.isRequired,
    };

    render() {
        return (
            <div className={styles.btnGroup} role="group">
                {this.props.children}
            </div>
        )
    }
}