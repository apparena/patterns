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
            this.props.lg && styles['col-lg-' + this.props.lg],
            this.props.md && styles['col-md-' + this.props.md],
            this.props.sm && styles['col-sm-' + this.props.sm],
            this.props.xs && styles['col-xs-' + this.props.xs],
            this.props.xsOffset && styles['col-xs-offset-' + this.props.xsOffset],
            this.props.smOffset && styles['col-sm-offset-' + this.props.smOffset],
            this.props.mdOffset && styles['col-md-offset-' + this.props.mdOffset],
            this.props.lgOffset && styles['col-lg-offset-' + this.props.lgOffset],
            this.props.xsPush && styles['col-xs-push-' + this.props.xsPush],
            this.props.smPush && styles['col-sm-push-' + this.props.smPush],
            this.props.mdPush && styles['col-md-push-' + this.props.mdPush],
            this.props.lgPush && styles['col-lg-push-' + this.props.lgPush],
            this.props.xsPull && styles['col-xs-pull-' + this.props.xsPull],
            this.props.smPull && styles['col-sm-pull-' + this.props.smPull],
            this.props.mdPull && styles['col-md-pull-' + this.props.mdPull],
            this.props.lgPull && styles['col-lg-pull-' + this.props.lgPull],
            {
                'hidden-xs': this.props.xsHidden,
                'hidden-sm': this.props.smHidden,
                'hidden-md': this.props.mdHidden,
                'hidden-lg': this.props.lgHidden,
            },
            this.props.className
        );

        return (
            <div className={componentClass}>
                {child}
            </div>
        );
    }
}