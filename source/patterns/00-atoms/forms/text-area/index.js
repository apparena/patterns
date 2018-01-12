import React from 'react';
import PropTypes from 'prop-types';
import ReactComponent from '../../../react-utils/component';

export default class TextArea extends ReactComponent {
    static propTypes = {
        placeholder: PropTypes.string,
        onChangeFunction: PropTypes.func,
        id: PropTypes.string,
        classNames: PropTypes.string
    };

    render() {
        return (
            <textarea className={this.props.classNames} id={this.props.id} placeholder={this.props.placeholder} onChange={this.props.onChangeFunction}/>
        );
    }
}