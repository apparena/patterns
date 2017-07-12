import React, {PropTypes} from "react";
import Markdown from "react-markdown";

function Description({description}) {
    return (
        <Markdown source={description}/>
    );
}

Description.propTypes = {
    description: PropTypes.string.isRequired
};

export default Description;