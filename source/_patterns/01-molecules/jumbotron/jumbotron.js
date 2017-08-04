import React from 'react';
import PropTypes from 'prop-types';
import ReactComponent from '../../react-utils/component';
import cx from 'classnames';

export default class Jumbotron extends ReactComponent {
    static propTypes = {
        children: PropTypes.oneOfType([
            PropTypes.element,
            PropTypes.arrayOf(PropTypes.element)
        ]).isRequired,
        classNames: PropTypes.string
    };

    static defaultProps = {
        classNames: ''
    };

    render() {
        let classes = cx(
            'jumbotron',
            this.props.classNames
        );
        return (
            <div className={classes}>
                {this.props.children}
            </div>
        );
    }

}