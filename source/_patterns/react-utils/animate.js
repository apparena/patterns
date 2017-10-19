import React from 'react';
import PropTypes from 'prop-types';
import ReactComponent from './component';

export default class Animate extends ReactComponent {
    static propTypes = {
        children: PropTypes.node.isRequired
    };

    componentDidMount() {
        console.warn('Animate is Deprecated. Will be full removed in next major version');
    }

    render() {
        return this.props.children;
    }
}
