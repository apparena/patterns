import React from 'react';
import PropTypes from 'prop-types';
import {findDOMNode} from 'react-dom';
import ReactComponent from './component';

let velocity;
let browser = false;
if (typeof window !== 'undefined') {
    browser = true;
    velocity = require('velocity-animate');
    require('velocity-animate/velocity.ui');
} else {
    // mocked velocity library
    velocity = function () {
        return new Promise().resolve(true);
    };
}

export default class Animate extends ReactComponent {
    static propTypes = {
        children: PropTypes.node.isRequired,
        transition: PropTypes.string,
        duration: PropTypes.number,
        options: PropTypes.object,
        initial: PropTypes.bool
    };

    static defaultProps = {
        transition: 'slideUpIn',
        duration: 400,
        options: {},
        initial: true
    };

    componentDidMount() {
        if (this.props.initial) {
            this.makeTransition(this.props);
        }
    }

    componentWillReceiveProps(nextProps) {
        if (this.props.transition !== nextProps.transition) {
            this.makeTransition(nextProps);
        }
    }

    makeTransition(props) {
        if (browser) {
            const dom = findDOMNode(this);
            const transition = `transition.${props.transition}`;
            velocity(dom, transition, Object.assign({
                duration: props.duration,
                display: null
            }, props.options));
        }
    }

    render() {
        return this.props.children;
    }
}
