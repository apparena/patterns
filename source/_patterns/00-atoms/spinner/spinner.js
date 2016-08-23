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
            styles['spinner'],
            styles['spinner-' + this.props.type],
            styles['spinner-' + this.props.size],
            this.props.className
        );

        return (
            <div className={componentClass}>
                <span className={cx(styles["spinner-dot"], styles["spinner-dot-first"])}/>
                <span className={cx(styles["spinner-dot"], styles["spinner-dot-second"])}/>
                <span className={cx(styles["spinner-dot"], styles["spinner-dot-third"])}/>
            </div>
        );
    }
}