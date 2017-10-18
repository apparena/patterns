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

    render() {
        return ReactDOM.createPortal(
            this.props.children,
            this._target,
        );
    }
}