import React, {PropTypes} from "react";

function PropsContainer({children}) {
    return (
        <div>
            <h3>Props of this component</h3>
            {children}
        </div>
    );
}

PropsContainer.propTypes = {
    children: PropTypes.node.isRequired
};

export default PropsContainer;