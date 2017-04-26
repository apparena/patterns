import React from "react";
import PropTypes from "prop-types";
import ReactComponent from "../../react-utils/component";
import Spinner from "../../00-atoms/spinner/spinner";
import axios from "axios";

export default class AjaxLoader extends ReactComponent {
    getInitState() {
        // Create an axios instance so we have everything pre-configured
        this.axios = axios.create({
            method: "GET",
        });

        return ({
            loading: true
        });
    }

    static propTypes = {
        resource: PropTypes.string.isRequired,
        onLoadingDone: PropTypes.func.isRequired,
        spinnerClassName: PropTypes.string,
        spinnerSize: PropTypes.oneOf(['sm', 'md', 'lg']),
        spinnerType: PropTypes.oneOf(['default', 'primary', 'inverted']),
        autoHide: PropTypes.bool
    };

    static defaultProps = {
        spinnerSize: "lg",
        spinnerClassName: "",
        spinnerType: "primary",
        autoHide: true,
    };

    /**
     * The request to the resource will be fired as soon as the loader has been mounted.
     * Response data will be passed to the parent component via the props method "onLoadingDone".
     * Hint: Disable autoHide if this component is only rendered conditionally.
     */
    componentDidMount() {
        this.axios.get(this.props.resource)
            .then((resp) => {
                this.props.onLoadingDone(resp);
                if (this.props.autoHide)
                    this.setState({loading: false});
            });
    }

    render() {
        return (
            <div>
                {this.state.loading &&
                    <Spinner size={this.props.spinnerSize} type={this.props.spinnerType}
                             className={this.props.spinnerClassName}
                    />
                }
            </div>
        );
    }
}