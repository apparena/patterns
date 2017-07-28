import React, {PropTypes} from 'react';
import {Icon, ReactComponent} from 'apparena-patterns-react';
import styles from './styles.scss';
import Highlight from 'react-highlight';

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
            <div>
                <h2>Example</h2>
                <div className={styles.exampleRoot}>
                    <div title="Show Code Snippet" className={styles.header}>
                        <h4 className={styles.title}>Appearance Options</h4>
                        <div className={styles.toggle} onClick={this.toggleCodeSnippet}>
                            <title id="title-xoyg1rk">Show Code Snippet</title>
                            <Icon name="html"/>
                        </div>
                    </div>
                    {this.state.showCode &&
                    <div className={styles.codeBlock}>
                        <Highlight className="language-js">
                            {code}
                        </Highlight>
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