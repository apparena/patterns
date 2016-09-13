import React, {PropTypes} from "react";
import ReactComponent from "../../react-utils/component";
import cx from "classnames";

export default class Nav extends ReactComponent {
    static propTypes = {
        classNames: PropTypes.string,
        listItems: PropTypes.object.isRequired,
    };

    render() {
        return (
            <ul className={cx("nav", this.props.classNames)}>
                {Object.keys(this.props.listItems).map((text) => {
                    return (
                        <li key={this.getUniqueKey()} className={cx("nav-item", this.props.listItems[text][2])}>
                            <a className={cx("nav-link", this.props.listItems[text][1])}
                               href={this.props.listItems[text][0]}
                            >
                                {text}
                            </a>
                        </li>
                    );
                })}
            </ul>
        );
    }
}