import React from 'react';
import PropTypes from 'prop-types';
import ReactComponent from '../../../react-utils/component/index';

export default class TextField extends ReactComponent {
  render() {
    return (
      <input className={this.props.classNames} id={this.props.id} type="text" placeholder={this.props.placeholder} onChange={this.props.onChangeFunction} />
    );
  }
}

TextField.propTypes = {
  placeholder: PropTypes.string,
  id: PropTypes.string.isRequired,
  onChangeFunction: PropTypes.func,
  classNames: PropTypes.string,
};
