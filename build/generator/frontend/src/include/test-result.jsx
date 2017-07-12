import React, {PropTypes} from "react";

function TestResult({result}) {
    return (
        <div>
            <h3>Here are your testresults</h3>
            {result}
        </div>
    );
}

TestResult.propTypes = {
    result: PropTypes.string.isRequired
};


export default TestResult;