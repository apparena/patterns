import React from "react";
import PropTypes from "prop-types";
import ReactComponent from "../../react-utils/component";
import cx from "classnames";

export default class ListGroup extends ReactComponent {
    static propTypes = {
        classNames: PropTypes.string,
        listItems: PropTypes.array.isRequired,
    };

    render() {
        return (
            <ul className={cx('list-group', this.props.classNames)} >
                {this.props.listItems.map((cname) => {
                    return (
                        <li className={cx('list-group-item', cname)}>
                            {this.props.listItems[cname]}
                        </li>
                    );
                })}
            </ul>
        );
    }
}