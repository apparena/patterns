import React from 'react';
import PropTypes from 'prop-types';
import Markdown from 'react-markdown';
import SyntaxHighlighter from 'react-syntax-highlighter/prism';
import {tomorrow} from 'react-syntax-highlighter/styles/prism';

class CodeBlock extends React.PureComponent {
    static propTypes = {
        literal: PropTypes.string,
        language: PropTypes.string,
        inline: PropTypes.bool
    };

    render() {
        return (
            <SyntaxHighlighter
                language={this.props.language || 'javascript'}
                style={tomorrow}
                showLineNumbers
            >
                {this.props.literal}
            </SyntaxHighlighter>
        );
    }

}

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