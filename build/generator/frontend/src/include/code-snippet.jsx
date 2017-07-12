import React, {PropTypes} from "react";
import Highlight from "react-highlight";

function Snippet({code}) {
    return (
        <div>
            <h3>Code Schnipsel</h3>
            <Highlight className="language-js">
                {`${code}`}
            </Highlight>
        </div>
    );
}

Snippet.propTypes = {
    code: PropTypes.string.isRequired
};


export default Snippet;