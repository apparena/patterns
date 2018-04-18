import React from 'react';
import PropTypes from 'prop-types';
import ReactComponent from '../../react-utils/component/index';
import cx from 'classnames';

export default class Jumbotron extends ReactComponent {
    static propTypes = {
        /**
         * Child elements that should be within the jumbotron
         */
        children: PropTypes.oneOfType([
            PropTypes.element,
            PropTypes.arrayOf(PropTypes.element)
        ]).isRequired,
        /**
         * Additional classNames for the jumbotron
         */
        classNames: PropTypes.string
    };

    static defaultProps = {
        classNames: ''
    };

    render() {
        const classes = cx(
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