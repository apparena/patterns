import React from 'react';
import PropTypes from 'prop-types';
import ReactComponent from '../component';
import ReactDraggable from 'react-draggable';

export default class Draggable extends ReactComponent {


    render() {
        const {handle, children} = this.props;
        return (
            <ReactDraggable
                handle={`.${handle}`}
            >
                {children}
            </ReactDraggable>
        );
    }
}

Draggable.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.arrayOf(PropTypes.element)
  ]).isRequired,
  handle: PropTypes.string.isRequired
};
