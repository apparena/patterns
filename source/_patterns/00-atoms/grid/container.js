import React, {PropTypes} from "react";
import cx from "classnames";
import styles from "./grid.scss";

function Container({className, fluid, children, ...props}) {
    props.className = cx(fluid ? styles["container-fluid"] : styles.container, className);

    return (
        <div {...props}>
            {children}
        </div>
    );
}

Container.propTypes = {
    fluid: PropTypes.bool,
};
Container.defaultProps = {
    fluid: false,
};

export default Container;