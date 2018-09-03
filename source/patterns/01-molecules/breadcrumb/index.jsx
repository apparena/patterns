import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import ReactComponent from '../../react-utils/component/index';

export default class Breadcrumb extends ReactComponent {
  render() {
    return (
      <ol className={cx('breadcrumb', this.props.classNames)}>
        {this.props.crumbNames.map((name, i) => {
          if (this.props.crumbLocations[i] !== '') {
            return (
              <li className="breadcrumb-item" key={`${name}--${i}`}>
                <a href={this.props.crumbLocations[i]}>{name}</a>
              </li>
            );
          }
          return (
            <li className="breadcrumb-item active" key={`${name}--${i}`}>
              {name}
            </li>
          );
        })}
      </ol>
    );
  }
}

Breadcrumb.propTypes = {
  /**
   * An array of the breadcrumb names
   */
  crumbNames: PropTypes.array.isRequired,
  /**
   * The URLs that the breadcrumbs should link to
   */
  crumbLocations: PropTypes.array.isRequired,
  /**
   * Additional classNames for the breadcrumbs
   */
  classNames: PropTypes.string,
};
