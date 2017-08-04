import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import styles from './form-group.scss';
import Tooltip from '../tooltip/tooltip';

function FormGroup({className, htmlFor, label, children, validationState, validationFeedback, inlineLabel, ...props}) {
    props.className = cx(styles['form-group'], validationState && styles[`has-${validationState}`], className);

    const elements = React.Children.map(children, (child) => {
        if (child.type.name === 'Input') {
            const input = React.cloneElement(child, {
                className: validationState ? cx(child.props.className, styles[`form-control-${validationState}`]) : cx(child.props.className),
                placeholder: inlineLabel ? label : ''
            });
            if (validationState && validationState !== 'default' && validationFeedback) {
                return (
                    <Tooltip
                        label={validationFeedback}
                        zIndex={2050}
                        className={styles.tooltip}
                    >
                        {input}
                    </Tooltip>
                );
            }
            return input;
        } else {
            return React.cloneElement(child);
        }
    });

    if (inlineLabel) {
        return (
            <div {...props}>
                {elements}
            </div>
        );
    }

    return (
        <div {...props}>
            <label className={styles['form-control-label']} htmlFor={htmlFor}>{label}</label>
            {elements}
        </div>
    );
}

FormGroup.propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
    htmlFor: PropTypes.string,
    id: PropTypes.string,
    label: PropTypes.string,
    validationFeedback: PropTypes.string,
    validationState: PropTypes.oneOf(['default', 'danger', 'success', 'warning']),
    inlineLabel: PropTypes.bool
};

FormGroup.defaultProps = {
    inlineLabel: false
};

export default FormGroup;
