import React from "react";
import PropTypes from "prop-types";
import ReactComponent from "../../react-utils/component";
import cx from "classnames";
import styles from "./table.scss";

export default class Table extends ReactComponent {
    static propTypes = {
        children: PropTypes.node.isRequired,
        classNames: PropTypes.string,
        striped: PropTypes.bool,
        bordered: PropTypes.bool,
        condensed: PropTypes.bool,
        hover: PropTypes.bool,
        responsive: PropTypes.bool,
        inverse: PropTypes.bool,
    };

    static defaultProps = {
        bordered: false,
        condensed: false,
        hover: false,
        responsive: false,
        striped: false,
        inverse: false,
    };

    render() {
        // classes
        const componentClass = cx(
            styles.table,
            this.props.bordered && styles['table-bordered'],
            this.props.condensed && styles['table-condensed'],
            this.props.hover && styles['table-hover'],
            this.props.striped && styles['table-striped'],
            this.props.inverse && styles['table-inverse'],
            this.props.className
        );

        if (this.props.responsive) {
            return (
                <div className={styles['table-responsive']}>
                    <table children={this.props.children} className={componentClass}/>
                </div>
            )
        }

        return (
            <table children={this.props.children} className={componentClass}/>
        );
    }
}