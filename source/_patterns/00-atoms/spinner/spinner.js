import React, {PropTypes} from "react";
import cx from "classnames";
import ReactComponent from "../../reactComponent";
import styles from "./spinner.scss";

export default class Button extends ReactComponent {
    static displayName = 'Spinner';
    static propTypes = {
        className: PropTypes.string,
        size: PropTypes.oneOf(['sm', 'md', 'lg']),
        type: PropTypes.oneOf(['default', 'primary', 'inverted'])
    };

    static defaultProps = {
        type: 'default',
        size: 'sm'
    };

    render() {
        var componentClass = cx(
            styles['Spinner'],
            styles['Spinner--' + this.props.type],
            styles['Spinner--' + this.props.size],
            this.props.className
        );

        return (
            <div className={componentClass}>
                <span className={cx(styles["Spinner_dot"], styles["Spinner_dot--first"])}/>
                <span className={cx(styles["Spinner_dot"], styles["Spinner_dot--second"])}/>
                <span className={cx(styles["Spinner_dot"], styles["Spinner_dot--third"])}/>
            </div>
        );
    }
}