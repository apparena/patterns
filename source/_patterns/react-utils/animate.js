import 'velocity-animate/velocity.ui';
import React, {PropTypes} from 'react';
import ReactComponent from './component';
import {VelocityComponent} from 'velocity-react';

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

    render() {
        const {initial, transition, duration, children, options} = this.props;
        const animation = `transition.${transition}`;
        return (
            <VelocityComponent {...options} runOnMount={initial} duration={duration} animation={animation}>
                {children}
            </VelocityComponent>
        );
    }
}
