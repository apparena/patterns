import React, {PropTypes} from "react";
import ReactComponent from "../../react-utils/component";
import cx from "classnames";

export default class ListGroup extends ReactComponent {
    static propTypes = {
        classNames: PropTypes.string,
        listItems: PropTypes.object.isRequired,
    };

    render() {
        return (
            <ul className={cx('list-group', this.props.classNames)} >
                {Object.keys(this.props.listItems).map((cname) => {
                    return (
                        <li className={cx('list-group-item', cname)} key={this.getUniqueKey()}>
                            {this.props.listItems[cname]}
                        </li>
                    );
                })}
            </ul>
        );
    }
}