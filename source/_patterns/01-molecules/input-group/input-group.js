import React, {PropTypes} from "react";
import ReactComponent from "../../reactComponent";
import cx from "classnames";

export default class InputGroup extends ReactComponent {
    static propTypes = {
        classNames: PropTypes.string,
        addonPosition: PropTypes.oneOf(['left', 'right']),
        addon: PropTypes.node.isRequired,
        input: PropTypes.node.isRequired,
    };

    static defaultProps = {
        addonPosition: 'left',
    };


    render() {
        if (this.props.addonPosition === 'left'){
            return (
                <div className={cx('input-group', this.props.classNames)}>
                    <span className="input-group-addon">
                        {this.props.addon}
                    </span>
                    {this.props.input}
                </div>
            );

        } else {
            return (
                <div className={cx('input-group', this.props.classNames)}>
                    {this.props.input}
                    <span className="input-group-addon">
                        {this.props.addon}
                    </span>
                </div>
            );

        }
    }
}