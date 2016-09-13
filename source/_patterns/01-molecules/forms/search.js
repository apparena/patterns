import React, {PropTypes} from "react";
import ReactComponent from "../../react-utils/component";

export default class Search extends ReactComponent {
    static propTypes = {
        formClassNames: PropTypes.string,
        labelClassNames: PropTypes.string,
        inputClassNames: PropTypes.string,
        prompt: PropTypes.string,
        placeholder: PropTypes.string,
        method: PropTypes.oneOf(['GET', 'POST']),
        id: PropTypes.string,
    };

    static defaultProps = {
        method: 'GET',
    };


    render() {
        return (
            <form method={this.props.method} className={this.props.formClassNames}>
                <label htmlFor="search" className={this.props.labelClassNames}>{this.props.prompt}</label>
                <input type="search" id={this.props.id} className={this.props.inputClassNames} placeholder={this.props.placeholder} />
            </form>
        );
    }
}