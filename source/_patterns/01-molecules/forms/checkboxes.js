import React, {PropTypes} from "react";
import ReactComponent from "../../reactComponent";
import cx from "classnames";

export default class Checkboxes extends ReactComponent {
    static propTypes = {
        classNames: PropTypes.string,
    };

    render() {
        return (
            <div className={cx('checkboxes', this.props.classNames)}>
                {this.getChildrenArray(this.props.children)}
            </div>
        );
    }
}