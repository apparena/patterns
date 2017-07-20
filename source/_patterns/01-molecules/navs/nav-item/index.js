import React from "react";
import PropTypes from "prop-types";
import ReactComponent from "../../../react-utils/component";
import cx from "classnames";
import styles from "../navs.scss";

export default class Nav extends ReactComponent {
    static propTypes = {
        className: PropTypes.string,
        children: PropTypes.node.isRequired,
        dropdown: PropTypes.bool,
        active: PropTypes.bool,
    };

    static defaultProps = {
        dropdown: false,
    };

    render() {
        const {children} = this.props;
        // classes
        const componentClass = cx(
            styles["nav-item"],
            this.props.dropdown && styles["dropdown"],
            this.props.className
        );
        const child = React.Children.map(children, (child) => {
            if (React.isValidElement(child)) {
                const className = cx(
                    styles["nav-link"],
                    this.props.active && styles.active,
                    child.props.className
                );
                return React.cloneElement(child, {...child.props, className});
            }
        });
        return (
            <li className={componentClass}>
                {child}
            </li>
        );
    }
};