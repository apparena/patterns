import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import styles from './form-group.scss';

function CustomControl({className, type, label, children, validationState, ...props}) {
    props.className = cx(
        styles.customControl,
        styles[`custom-${type}`]
    );

    const formGroupClass = cx(styles['form-group'], validationState && styles[`has-${validationState}`], className);

    const input = React.cloneElement(children, {
        className: cx(children.props.className, styles['custom-control-input'])
    });

    return (
        <div className={formGroupClass}>
            <label {...props}>
                {input}
                <span className={styles['custom-control-indicator']}/>
                <span className={styles['custom-control-description']}>{label}</span>
            </label>
        </div>
    );
}

CustomControl.propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
    label: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
    type: PropTypes.oneOf(['checkbox', 'radio']),
    validationState: PropTypes.oneOf(['default', 'danger', 'success', 'warning'])
};

CustomControl.defaultProps = {
    type: 'checkbox'
};

export default CustomControl;