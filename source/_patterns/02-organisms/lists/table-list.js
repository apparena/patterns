import React, {PropTypes} from "react";
import ReactComponent from "../../react-utils/component";
import cx from "classnames";
import styles from "./table-list.scss";

export default class TableList extends ReactComponent {
    static propTypes = {
        className: PropTypes.string,
        scrollable: PropTypes.bool,
        scrollableHeight: PropTypes.number,
        hover: PropTypes.bool,
        striped: PropTypes.bool,
        bordered: PropTypes.bool
    };


    render() {
        // classes
        const componentClass = cx(
            styles.table,
            this.props.inverse && styles['table-inverse'],
            this.props.bordered && styles['table-bordered'],
            this.props.striped && styles['table-striped'],
            this.props.hover && styles['table-hover'],
            this.props.className
        );
        return (
            <div className="t-col-main-content pa-1">
                <div className="t-entity-list">
                    <table className={componentClass}>
                        {this.getChildrenArray(this.props.children)}
                    </table>
                </div>
            </div>
        )
    }
}
