import React from 'react';
import PropTypes from 'prop-types';
import ReactComponent from '../../../react-utils/component/index.jsx';
import cx from 'classnames';
import styles from '../grid.scss';

export default class Row extends ReactComponent {
    static propTypes = {
        /**
         * The children of the row
         */
        children: PropTypes.node.isRequired,
        /**
         * Additional classNames
         */
        className: PropTypes.string,
        /**
         * Sets the justification for the row
         */
        justifyContent: PropTypes.oneOf(['start', 'center', 'end', 'around', 'between']),
        /**
         * Sets the alignment for the row
         */
        alignItems: PropTypes.oneOf(['start', 'center', 'end'])
    };

    render() {
        const {children} = this.props;
        const child = React.Children.map(children, (child) => {
            if (React.isValidElement(child)) {
                return React.cloneElement(child, child.props);
            }
        });

        // classes
        const componentClass = cx(
            styles.row,
            this.props.justifyContent && styles[`justify-content-${this.props.justifyContent}`],
            this.props.alignItems && styles[`align-items-${this.props.justifyContent}`],
            this.props.className
        );

        return (
            <div className={componentClass}>
                {child}
            </div>
        );
    }
}