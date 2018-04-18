import React from 'react';
import PropTypes from 'prop-types';
import ReactComponent from '../../../react-utils/component/index';
import cx from 'classnames';
import styles from '../grid.scss';

export default class Col extends ReactComponent {
    static propTypes = {
        /**
         * Child nodes that should reside within the column
         */
        children: PropTypes.node,
        /**
         * Additional classNames for the column
         */
        className: PropTypes.string,
        /**
         * The number of columns you wish to span (xl and up)
         */
        xl: PropTypes.string, // The number of columns you wish to span
        /**
         * The number of columns you wish to span (lg and up)
         */
        lg: PropTypes.string, // The number of columns you wish to span
        /**
         * The number of columns you wish to span (md and up)
         */
        md: PropTypes.string, // The number of columns you wish to span
        /**
         * The number of columns you wish to span (sm and up)
         */
        sm: PropTypes.string, // The number of columns you wish to span
        /**
         * The number of columns you wish to span (xs and up)
         */
        xs: PropTypes.string, // The number of columns you wish to span
        /**
         * Number of columns to leave as space (xs and up)
         */
        xsOffset: PropTypes.number,
        /**
         * Number of columns to leave as space (sm and up)
         */
        smOffset: PropTypes.number,
        /**
         * Number of columns to leave as space (md and up)
         */
        mdOffset: PropTypes.number,
        /**
         * Number of columns to leave as space (lg and up)
         */
        lgOffset: PropTypes.number,
        /**
         * Number of columns to leave as space (xl and up)
         */
        xlOffset: PropTypes.number,
        /**
         * Takes up the remaining space or divides columns up into equal width columns if autoWidth is used exclusively
         */
        autoWidth: PropTypes.bool,
        /**
         * Set the width of a column based on the content (xs and up)
         */
        xsAutoContent: PropTypes.bool,
        /**
         * Set the width of a column based on the content (sm and up)
         */
        smAutoContent: PropTypes.bool,
        /**
         * Set the width of a column based on the content (md and up)
         */
        mdAutoContent: PropTypes.bool,
        /**
         * Set the width of a column based on the content (lg and up)
         */
        lgAutoContent: PropTypes.bool,
        /**
         * Set the width of a column based on the content (xl and up)
         */
        xlAutoContent: PropTypes.bool,
        /**
         * Hide this column for specific display sizes (xs and up)
         */
        xsHidden: PropTypes.bool,
        /**
         * Hide this column for specific display sizes (sm and up)
         */
        smHidden: PropTypes.bool,
        /**
         * Hide this column for specific display sizes (md and up)
         */
        mdHidden: PropTypes.bool,
        /**
         * Hide this column for specific display sizes (lg and up)
         */
        lgHidden: PropTypes.bool,
        /**
         * Hide this column for specific display sizes (xl and up)
         */
        xlHidden: PropTypes.bool,
        /**
         * How should this component be aligned vertically (xs and up)
         */
        xsVerticalAlignment: PropTypes.oneOf(['auto', 'start', 'end', 'center', 'baseline', 'stretch']),
        /**
         * How should this component be aligned vertically (sm and up)
         */
        smVerticalAlignment: PropTypes.oneOf(['auto', 'start', 'end', 'center', 'baseline', 'stretch']),
        /**
         * How should this component be aligned vertically (md and up)
         */
        mdVerticalAlignment: PropTypes.oneOf(['auto', 'start', 'end', 'center', 'baseline', 'stretch']),
        /**
         * How should this component be aligned vertically (lg and up)
         */
        lgVerticalAlignment: PropTypes.oneOf(['auto', 'start', 'end', 'center', 'baseline', 'stretch']),
        /**
         * How should this component be aligned vertically (xl and up)
         */
        xlVerticalAlignment: PropTypes.oneOf(['auto', 'start', 'end', 'center', 'baseline', 'stretch']),
        /**
         * Makes this column the n-th column (xs and up)
         */
        xsOrder: PropTypes.number,
        /**
         * Makes this column the n-th column (sm and up)
         */
        smOrder: PropTypes.number,
        /**
         * Makes this column the n-th column (md and up)
         */
        mdOrder: PropTypes.number,
        /**
         * Makes this column the n-th column (lg and up)
         */
        lgOrder: PropTypes.number,
        /**
         * Makes this column the n-th column (xl and up)
         */
        xlOrder: PropTypes.number,
    };

    render() {
        const {children} = this.props;
        const child = React.Children.map(children, (child) => {
            if (React.isValidElement(child)) {
                return React.cloneElement(child, child.props);
            }
        });

        // classes
        const componentClass = cx(
            this.props.xl && styles[`col-xl-${this.props.xl}`],
            this.props.lg && styles[`col-lg-${this.props.lg}`],
            this.props.md && styles[`col-md-${this.props.md}`],
            this.props.sm && styles[`col-sm-${this.props.sm}`],
            this.props.xs && styles[`col-${this.props.xs}`],
            this.props.autoWidth && styles[`col`],
            this.props.xsOffset && styles[`offset-${this.props.xsOffset}`],
            this.props.smOffset && styles[`offset-sm-${this.props.smOffset}`],
            this.props.mdOffset && styles[`offset-md-${this.props.mdOffset}`],
            this.props.lgOffset && styles[`offset-lg-${this.props.lgOffset}`],
            this.props.xlOffset && styles[`offset-xl-${this.props.xlOffset}`],
            this.props.xsAutoContent && styles['col-auto'],
            this.props.smAutoContent && styles['col-sm-auto'],
            this.props.mdAutoContent && styles['col-md-auto'],
            this.props.lgAutoContent && styles['col-lg-auto'],
            this.props.xlAutoContent && styles['col-xl-auto'],
            this.props.xsVerticalAlignment && styles[`align-self-${this.props.xsVerticalAlignment}`],
            this.props.smVerticalAlignment && styles[`align-self-sm-${this.props.smVerticalAlignment}`],
            this.props.mdVerticalAlignment && styles[`align-self-md-${this.props.mdVerticalAlignment}`],
            this.props.lgVerticalAlignment && styles[`align-self-lg-${this.props.lgVerticalAlignment}`],
            this.props.xlVerticalAlignment && styles[`align-self-xl-${this.props.xlVerticalAlignment}`],
            this.props.xsOrder && styles[`order-${this.props.xsOrder}`],
            this.props.smOrder && styles[`order-sm-${this.props.smOrder}`],
            this.props.mdOrder && styles[`order-md-${this.props.mdOrder}`],
            this.props.lgOrder && styles[`order-lg-${this.props.lgOrder}`],
            this.props.xlOrder && styles[`order-xl-${this.props.xlOrder}`],
            this.props.xsHidden && styles['d-xs-none'],
            this.props.smHidden && styles['d-sm-none'],
            this.props.mdHidden && styles['d-md-none'],
            this.props.lgHidden && styles['d-lg-none'],
            this.props.xlHidden && styles['d-xl-none'],
            this.props.className
        );

        return (
            <div className={componentClass}>
                {child}
            </div>
        );
    }
}