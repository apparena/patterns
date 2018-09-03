import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import ReactComponent from '../../react-utils/component/index';

export default class Jumbotron extends ReactComponent {
  render() {
    const classes = cx(
      'jumbotron',
      this.props.classNames,
    );
    return (
      <div className={classes}>
        {this.props.children}
      </div>
    );
  }
}

Jumbotron.propTypes = {
  /**
   * Child elements that should be within the jumbotron
   */
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.arrayOf(PropTypes.element),
  ]).isRequired,
  /**
   * Additional classNames for the jumbotron
   */
  classNames: PropTypes.string,
};

Jumbotron.defaultProps = {
  classNames: '',
};
