import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import styles from '../grid.module.scss';

/**
 * @deprecated
 * @param className
 * @param fluid
 * @param children
 * @param props
 * @returns {*}
 * @constructor
 */
function Container({
  className, fluid, children, ...props
}) {
  props.className = cx(fluid ? styles['container-fluid'] : styles.container, className);
  console.warn('The Container component will be removed in the next major release. Replace this component with the Bootstrap container class');
  return (
    <div {...props}>
      {children}
    </div>
  );
}

Container.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  fluid: PropTypes.bool,
};
Container.defaultProps = {
  fluid: false,
};

export default Container;
