/* eslint-disable react/no-multi-comp */
import React from 'react';
import PropTypes from 'prop-types';
import Markdown from 'react-markdown';
import SyntaxHighlighter from 'react-syntax-highlighter/prism';
import {tomorrow} from 'react-syntax-highlighter/styles/prism';

function CodeBlock({literal, language}) {
    return (
        <SyntaxHighlighter
            language={language || 'javascript'}
            style={tomorrow}
            showLineNumbers
        >
            {literal}
        </SyntaxHighlighter>
    );
}

CodeBlock.propTypes = {
    literal: PropTypes.string,
    language: PropTypes.string,
};

function Description({description}) {
    return (
        <Markdown
            source={description}
            renderers={{
                codeBlock: CodeBlock
            }}
        />
    );
}

Description.propTypes = {
    description: PropTypes.string.isRequired
};

export default Description;

/* eslint-enable react/no-multi-comp */