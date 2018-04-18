import React from 'react';
import PropTypes from 'prop-types';
import ReactComponent from '../../react-utils/component/index';
import cx from 'classnames';
import styles from './index.scss';

export default class Table extends ReactComponent {
    static propTypes = {
        /**
         * The HTML table structure
         */
        children: PropTypes.node.isRequired,
        /**
         * Additional classNames for the table
         */
        classNames: PropTypes.string,
        /**
         * Highlight odd rows?
         */
        striped: PropTypes.bool,
        /**
         * Draw borders around table cells?
         */
        bordered: PropTypes.bool,
        /**
         * Make the table more compact by cutting cell padding in half?
         */
        condensed: PropTypes.bool,
        /**
         * Should rows be highlighted when hovering over them?
         */
        hover: PropTypes.bool,
        /**
         * Enable horizontal scrolling when the table exceeds the display size?
         */
        responsive: PropTypes.bool,
        /**
         * Invert the table colors?
         */
        inverse: PropTypes.bool
    };

    static defaultProps = {
        bordered: false,
        condensed: false,
        hover: false,
        responsive: false,
        striped: false,
        inverse: false
    };

    render() {
        // classes
        const componentClass = cx(
            styles.table,
            this.props.bordered && styles['table-bordered'],
            this.props.condensed && styles['table-sm'],
            this.props.hover && styles['table-hover'],
            this.props.striped && styles['table-striped'],
            this.props.inverse && styles['table-dark'],
            this.props.className
        );

        if (this.props.responsive) {
            return (
                <div className={styles['table-responsive']}>
                    <table children={this.props.children} className={componentClass}/>
                </div>
            );
        }

        return (
            <table children={this.props.children} className={componentClass}/>
        );
    }
}