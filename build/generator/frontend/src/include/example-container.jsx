import React, {PropTypes} from "react";

function ExampleContainer({children}) {
    return (
        <div>
            <h3>Example to play with</h3>
            {children}
        </div>
    );
}

ExampleContainer.propTypes = {
    children: PropTypes.node.isRequired
};

export default ExampleContainer;