import React from 'react';
import PropTypes from 'prop-types';
import ReactComponent from '../../react-utils/component/index.jsx';
import cx from 'classnames';

export default class ListGroup extends ReactComponent {
    static propTypes = {
        /**
         * Additional classNames for the list-group
         */
        classNames: PropTypes.string,
        /**
         * An array of items to display as list items
         */
        listItems: PropTypes.array.isRequired
    };

    render() {
        return (
            <ul className={cx('list-group', this.props.classNames)}>
                {this.props.listItems.map((cname) => {
                    return (
                        <li className={cx('list-group-item', cname)}>
                            {cname}
                        </li>
                    );
                })}
            </ul>
        );
    }
}