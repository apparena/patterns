import React, {PropTypes} from "react";
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
            this.props.lg && styles["col-lg-" + this.props.lg],
            this.props.md && styles["col-md-" + this.props.md],
            this.props.sm && styles["col-sm-" + this.props.sm],
            this.props.xs && styles["col-xs-" + this.props.xs],
            this.props.xsOffset && styles["offset-xs-" + this.props.xsOffset],
            this.props.smOffset && styles["offset-sm-" + this.props.smOffset],
            this.props.mdOffset && styles["offset-md-" + this.props.mdOffset],
            this.props.lgOffset && styles["offset-lg-" + this.props.lgOffset],
            this.props.xsPush && styles["push-xs-" + this.props.xsPush],
            this.props.smPush && styles["push-sm-" + this.props.smPush],
            this.props.mdPush && styles["push-md-" + this.props.mdPush],
            this.props.lgPush && styles["push-lg-" + this.props.lgPush],
            this.props.xsPull && styles["pull-xs-" + this.props.xsPull],
            this.props.smPull && styles["pull-sm-" + this.props.smPull],
            this.props.mdPull && styles["pull-md-" + this.props.mdPull],
            this.props.lgPull && styles["pull-lg-" + this.props.lgPull],
            this.props.xsHidden && styles["hidden-xs"],
            this.props.smHidden && styles["hidden-sm"],
            this.props.mdHidden && styles["hidden-md"],
            this.props.lgHidden && styles["hidden-lg"],
            this.props.className
        );

        return (
            <div className={componentClass}>
                {child}
            </div>
        );
    }
}