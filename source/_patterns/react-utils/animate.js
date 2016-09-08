import velocity from "velocity-animate";
import {PropTypes} from "react";
import {findDOMNode} from "react-dom";
import ReactComponent from "../reactComponent";

export default class Animate extends ReactComponent {
    static propTypes = {
        transition: PropTypes.string,
        duration: PropTypes.number,
        children: PropTypes.node
    };

    static defaultProps = {
        transition: 'slideUp', // fadeIn, fadeOut, slideUp, slideDown
        duration: 400
    };

    componentDidMount() {
        const dom = findDOMNode(this);
        const transition = this.props.transition;
        velocity(dom, 'fadeIn', this.props.duration);
    }

    render() {
        return this.props.children;
    }
}