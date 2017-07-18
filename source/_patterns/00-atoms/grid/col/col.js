import React from "react";
import PropTypes from "prop-types";
import ReactComponent from "../../react-utils/component";
import cx from "classnames";
import styles from "./grid.scss";

export default class Col extends ReactComponent {
    static propTypes = {
        children: PropTypes.node,
        className: PropTypes.string,
        lg: PropTypes.string, // The number of columns you wish to span
        md: PropTypes.string, // The number of columns you wish to span
        sm: PropTypes.string, // The number of columns you wish to span
        xs: PropTypes.string, // The number of columns you wish to span
        xsOffset: PropTypes.number,
        smOffset: PropTypes.number,
        mdOffset: PropTypes.number,
        lgOffset: PropTypes.number,
        autoWidth: PropTypes.bool,
        xsAutoContent: PropTypes.bool,
        smAutoContent: PropTypes.bool,
        mdAutoContent: PropTypes.bool,
        lgAutoContent: PropTypes.bool,
        xsPush: PropTypes.number,
        smPush: PropTypes.number,
        mdPush: PropTypes.number,
        lgPush: PropTypes.number,
        xsPull: PropTypes.number,
        smPull: PropTypes.number,
        mdPull: PropTypes.number,
        lgPull: PropTypes.number,
        xsHidden: PropTypes.bool,
        smHidden: PropTypes.bool,
        mdHidden: PropTypes.bool,
        lgHidden: PropTypes.bool,
        xsVerticalAlignment: PropTypes.oneOf(["auto", "start", "end", "center", "baseline", "stretch"]),
        smVerticalAlignment: PropTypes.oneOf(["auto", "start", "end", "center", "baseline", "stretch"]),
        mdVerticalAlignment: PropTypes.oneOf(["auto", "start", "end", "center", "baseline", "stretch"]),
        lgVerticalAlignment: PropTypes.oneOf(["auto", "start", "end", "center", "baseline", "stretch"]),
        xsOrder: PropTypes.oneOf(["unordered", "last", "first"]),
        smOrder: PropTypes.oneOf(["unordered", "last", "first"]),
        mdOrder: PropTypes.oneOf(["unordered", "last", "first"]),
        lgOrder: PropTypes.oneOf(["unordered", "last", "first"]),
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
            this.props.lg && styles[`col-lg-${this.props.lg}`],
            this.props.md && styles[`col-md-${this.props.md}`],
            this.props.sm && styles[`col-sm-${this.props.sm}`],
            this.props.xs && styles[`col-${this.props.xs}`],
            this.props.autoWidth && styles[`col`],
            this.props.xsOffset && styles[`offset-${this.props.xsOffset}`],
            this.props.smOffset && styles[`offset-sm-${this.props.smOffset}`],
            this.props.mdOffset && styles[`offset-md-${this.props.mdOffset}`],
            this.props.lgOffset && styles[`offset-lg-${this.props.lgOffset}`],
            this.props.xsAutoContent && styles["col-auto"],
            this.props.smAutoContent && styles["col-sm-auto"],
            this.props.mdAutoContent && styles["col-md-auto"],
            this.props.lgAutoContent && styles["col-lg-auto"],
            this.props.xsVerticalAlignment && styles[`align-self-${this.props.xsVerticalAlignment}`],
            this.props.smVerticalAlignment && styles[`align-self-sm-${this.props.smVerticalAlignment}`],
            this.props.mdVerticalAlignment && styles[`align-self-md-${this.props.mdVerticalAlignment}`],
            this.props.lgVerticalAlignment && styles[`align-self-lg-${this.props.lgVerticalAlignment}`],
            this.props.xsOrder && styles[`flex-${this.props.xsOrder}`],
            this.props.smOrder && styles[`flex-sm-${this.props.smOrder}`],
            this.props.mdOrder && styles[`flex-md-${this.props.mdOrder}`],
            this.props.lgOrder && styles[`flex-lg-${this.props.lgOrder}`],
            this.props.xsPush && styles[`push-${this.props.xsPush}`],
            this.props.smPush && styles[`push-sm-${this.props.smPush}`],
            this.props.mdPush && styles[`push-md-${this.props.mdPush}`],
            this.props.lgPush && styles[`push-lg-${this.props.lgPush}`],
            this.props.xsPull && styles[`pull-${this.props.xsPull}`],
            this.props.smPull && styles[`pull-sm-${this.props.smPull}`],
            this.props.mdPull && styles[`pull-md-${this.props.mdPull}`],
            this.props.lgPull && styles[`pull-lg-${this.props.lgPull}`],
            this.props.xsHidden && styles["hidden-xs-down"],
            this.props.smHidden && styles["hidden-sm-down"],
            this.props.mdHidden && styles["hidden-md-down"],
            this.props.lgHidden && styles["hidden-lg-down"],
            this.props.className
        );

        return (
            <div className={componentClass}>
                {child}
            </div>
        );
    }
}