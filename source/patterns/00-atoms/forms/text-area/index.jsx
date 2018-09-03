import React from 'react';
import PropTypes from 'prop-types';
import ReactComponent from '../../../react-utils/component/index';

export default class TextArea extends ReactComponent {
  render() {
    return (
      <textarea className={this.props.classNames} id={this.props.id} placeholder={this.props.placeholder} onChange={this.props.onChangeFunction} />
    );
  }
}

TextArea.propTypes = {
  placeholder: PropTypes.string,
  onChangeFunction: PropTypes.func,
  id: PropTypes.string,
  classNames: PropTypes.string,
};
