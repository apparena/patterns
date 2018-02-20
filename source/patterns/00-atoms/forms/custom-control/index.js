import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import styles from './component.scss';

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
            <div {...props}>
                {input}
                <span className={styles['custom-control-indicator']}/>
                <label className={styles['custom-control-label']}>{label}</label>
            </div>
        </div>
    );
}

CustomControl.propTypes = {
    /**
     * Children
     */
    children: PropTypes.node.isRequired,
    /**
     * CSS classes
     */
    className: PropTypes.string,
    /**
     * Label for the input field
     */
    label: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
    /**
     * Is it a checkbox or a radio button
     */
    type: PropTypes.oneOf(['checkbox', 'radio']),
    /**
     * Validation state the input field is currently in
     */
    validationState: PropTypes.oneOf(['default', 'danger', 'success', 'warning'])
};

CustomControl.defaultProps = {
    type: 'checkbox'
};

export default CustomControl;