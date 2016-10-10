import React, {PropTypes} from "react";
import ReactComponent from "../../react-utils/component";
import cx from "classnames";
import styles from "./table.scss";

export default class Table extends ReactComponent {
    static propTypes = {
        classNames: PropTypes.string,
        striped: PropTypes.bool,
        bordered: PropTypes.bool,
        condensed: PropTypes.bool,
        hover: PropTypes.bool,
        responsive: PropTypes.bool,
    };

    static defaultProps = {
        bordered: false,
        condensed: false,
        hover: false,
        responsive: false,
        striped: false,
    };

    render() {
        // classes
        const componentClass = cx(
            styles.table,
            this.props.bordered && styles['table-bordered'],
            this.props.condensed && styles['table-condensed'],
            this.props.hover && styles['table-hover'],
            this.props.responsive && styles['table-responsive'],
            this.props.striped && styles['table-striped'],
            this.props.className
        );
        return (
            <table children={this.props.children} className={componentClass}/>
        );
    }
}