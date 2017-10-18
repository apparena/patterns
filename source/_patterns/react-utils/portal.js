import React from 'react';
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';
import ReactComponent from './component';

export default class Portal extends ReactComponent {
    static propTypes = {
        children: PropTypes.node.isRequired,
        attachToNode: PropTypes.object,
        replace: PropTypes.bool
    };

    static defaultProps = {
        replace: false
    };

    componentWillMount() {
        if (this.props.replace) {
            this.props.attachToNode.innerHTML = '';
        }
        this._target = this.props.attachToNode ? this.props.attachToNode.appendChild(document.createElement('div')) : document.body.appendChild(document.createElement('div'));
    }

    componentWillUpdate(nextProps, nextState, nextContext) {
        if (nextProps.attachToNode !== this.props.attachToNode) {
            ReactDOM.unmountComponentAtNode(this._target);
            if (this.props.attachToNode) {
                this.props.attachToNode.removeChild(this._target);
            } else {
                document.body.removeChild(this._target);
            }
            this._target = nextProps.attachToNode ? nextProps.attachToNode.appendChild(document.createElement('div')) : document.body.appendChild(document.createElement('div'));
        }
    }


    componentWillUnmount() {
        ReactDOM.unmountComponentAtNode(this._target);
        if (this.props.attachToNode) {
            this.props.attachToNode.removeChild(this._target);
        } else {
            document.body.removeChild(this._target);
        }
    }

    render() {
        return ReactDOM.createPortal(
            this.props.children,
            this._target,
        );
    }
}