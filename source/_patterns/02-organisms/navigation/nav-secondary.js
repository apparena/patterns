import React, {PropTypes} from "react";
import {ReactComponent} from "apparena-patterns-react";

export default class SecondNavComponent extends ReactComponent {
    static propTypes = {
        children: PropTypes.oneOfType([
            PropTypes.element,
            PropTypes.arrayOf(PropTypes.element)
        ]).isRequired
    }

    render() {
        const {children} = this.props;
        const steps = React.Children.map(children, (child, index) => {
            if (React.isValidElement(child)) {
                return React.cloneElement(child, child.props);
            }
        });
        return (
            <div className="o-nav o-nav-secondary" style={{backgroundColor: "white"}}>
                <ul className="nav nav-inline">
                    {steps}
                </ul>
            </div>
        );
    }
}