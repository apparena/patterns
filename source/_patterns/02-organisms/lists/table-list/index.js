import React from 'react';
import PropTypes from 'prop-types';
import ReactComponent from '../../../react-utils/component';
import cx from 'classnames';
import styles from './table-list.scss';

export default class TableList extends ReactComponent {
    static propTypes = {
        /**
         * The table(s) that should be grouped together
         */
        className: PropTypes.string,
        /**
         * Deprecated
         */
        scrollable: PropTypes.bool,
        /**
         * Deprecated
         */
        scrollableHeight: PropTypes.number,
        /**
         * Should rows be highlighted when hovering over them?
         */
        hover: PropTypes.bool,
        /**
         * Highlight odd rows?
         */
        striped: PropTypes.bool,
        /**
         * Draw borders around table cells?
         */
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
            <div className="t-col-main-content p-1">
                <div className="t-entity-list">
                    <table className={componentClass}>
                        {this.getChildrenArray(this.props.children)}
                    </table>
                </div>
            </div>
        );
    }
}
