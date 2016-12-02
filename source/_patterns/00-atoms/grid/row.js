import React, {PropTypes} from "react";
import ReactComponent from "../../react-utils/component";
import cx from "classnames";
import styles from "./grid.scss";

export default class Row extends ReactComponent {
    static propTypes = {
        children: PropTypes.node.isRequired,
        className: PropTypes.string,
        xsVerticalAlignment: PropTypes.oneOf(["top", "middle", "bottom"]),
        smVerticalAlignment: PropTypes.oneOf(["top", "middle", "bottom"]),
        mdVerticalAlignment: PropTypes.oneOf(["top", "middle", "bottom"]),
        lgVerticalAlignment: PropTypes.oneOf(["top", "middle", "bottom"]),
        xsHorizontalAlignment: PropTypes.oneOf(["left", "center", "right", "around", "between"]),
        smHorizontalAlignment: PropTypes.oneOf(["left", "center", "right", "around", "between"]),
        mdHorizontalAlignment: PropTypes.oneOf(["left", "center", "right", "around", "between"]),
        lgHorizontalAlignment: PropTypes.oneOf(["left", "center", "right", "around", "between"]),
    };

    render() {
        const {children} = this.props;
        const child = React.Children.map(children, (child) => {
            if (React.isValidElement(child)) {
                return React.cloneElement(child, child.props);
            }
        });

        // classes
        const componentClass = cx(
            styles.row,
            this.props.xsVerticalAlignment && styles["flex-xs-" + this.props.xsVerticalAlignment],
            this.props.smVerticalAlignment && styles["flex-sm-" + this.props.smVerticalAlignment],
            this.props.mdVerticalAlignment && styles["flex-md-" + this.props.mdVerticalAlignment],
            this.props.lgVerticalAlignment && styles["flex-lg-" + this.props.lgVerticalAlignment],
            this.props.xsHorizontalAlignment && styles["flex-xs-" + this.props.xsHorizontalAlignment],
            this.props.smHorizontalAlignment && styles["flex-sm-" + this.props.smHorizontalAlignment],
            this.props.mdHorizontalAlignment && styles["flex-md-" + this.props.mdHorizontalAlignment],
            this.props.lgHorizontalAlignment && styles["flex-lg-" + this.props.lgHorizontalAlignment],
            this.props.className
        );

        return (
            <div className={componentClass}>
                {child}
            </div>
        );
    }
}