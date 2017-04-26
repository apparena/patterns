import React from "react";
import PropTypes from "prop-types";
import ReactComponent from "../../react-utils/component";
import cx from "classnames";
import styles from "./nav-secondary.scss";

export default class SecondNav extends ReactComponent {
    static propTypes = {
        children: PropTypes.node.isRequired
    };

    render() {
        const {children} = this.props;
        return (
            <div className={cx(styles["o-nav"], styles["o-nav-secondary"])}>
                {children}
            </div>
        );
    }
}