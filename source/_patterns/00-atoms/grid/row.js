import React, {PropTypes} from "react";
import ReactComponent from "../../react-utils/component";
import cx from "classnames";
import styles from "./grid.scss";

export default class Row extends ReactComponent {
    static propTypes = {
        children: PropTypes.node.isRequired,
        className: PropTypes.string,
        justifyContent: PropTypes.oneOf(["start", "center", "end", "around", "between"]),
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
            this.props.justifyContent && styles[`justify-content-${this.props.justifyContent}`],
            this.props.className
        );

        return (
            <div className={componentClass}>
                {child}
            </div>
        );
    }
}