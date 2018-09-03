import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import ReactComponent from '../../react-utils/component/index';

export default class ListGroup extends ReactComponent {
  render() {
    return (
      <ul className={cx('list-group', this.props.classNames)}>
        {this.props.listItems.map(cname => (
          <li className={cx('list-group-item', cname)}>
            {cname}
          </li>
        ))}
      </ul>
    );
  }
}

ListGroup.propTypes = {
  /**
   * Additional classNames for the list-group
   */
  classNames: PropTypes.string,
  /**
   * An array of items to display as list items
   */
  listItems: PropTypes.array.isRequired,
};
