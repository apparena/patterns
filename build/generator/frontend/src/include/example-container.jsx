import React from 'react';
import PropTypes from 'prop-types';
import {Icon, ReactComponent} from 'apparena-patterns-react';
import styles from './styles.scss';
import SyntaxHighlighter from 'react-syntax-highlighter/prism';
import {darcula} from 'react-syntax-highlighter/styles/prism';

export default class Example extends ReactComponent {
    static defaultProps = {
        code: PropTypes.string.isRequired,
        children: PropTypes.node.isRequired
    };

    getInitState() {
        this.toggleCodeSnippet = ::this.toggleCodeSnippet;
        return {
            showCode: false
        };
    }

    toggleCodeSnippet() {
        this.setState({
            showCode: !this.state.showCode
        });
    }


    render() {
        const {children, code} = this.props;
        return (
            <div className={styles.exampleRoot}>
                <div title="Show Code Snippet" className={styles.header}>
                    <h4 className={styles.title}>Appearance Options</h4>
                    <div className={styles.toggle} onClick={this.toggleCodeSnippet}>
                        <title id="title-xoyg1rk">Show Code Snippet</title>
                        <Icon name="html"/>
                    </div>
                    {this.state.showCode &&
                    <div className={styles.codeBlock}>
                        <SyntaxHighlighter
                            language={'jsx'}
                            style={darcula}
                        >
                            {code}
                        </SyntaxHighlighter>
                    </div>
                    }
                    <div className={styles.body}>
                        <div>
                            {children}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}