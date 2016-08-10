import React, {PropTypes} from "react";
import ReactComponent from "../../reactComponent";
import styles from "./_progress-tracker.scss";

export default class Button extends ReactComponent {
    static propTypes = {
        /**
         * Can be used to render a progress-tracker-steps inside an progress-tracker for instance.
         */
        children: PropTypes.oneOfType([
                PropTypes.arrayOf(PropTypes.element),
                PropTypes.element
            ]
        ).isRequired
    };

    render() {
        const {children} = this.props;

        const steps = React.Children.map(children, (step, index) => {
            return React.cloneElement(step, step.props);
        });

        return (
            <div className={styles["progress-tracker"]}>
                <ol className={styles["progress-tracker"]}>
                    {steps}
                </ol>
            </div>
        )
    }
}