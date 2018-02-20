import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import styles from './component.scss';
import ReactComponent from '../../../react-utils/component';

export default class CustomControl extends ReactComponent {
    static propTypes = {
        /**
         * If the checkbox is checked or not
         */
        checked: PropTypes.bool,
        /**
         * CSS classes
         */
        className: PropTypes.string,
        /**
         * If the input field is disabled or not
         */
        disabled: PropTypes.bool,
        /**
         * ID of the input field
         */
        id: PropTypes.string,
        /**
         * Label for the input field
         */
        label: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
        /**
         * Name of the input field
         */
        name: PropTypes.string.isRequired,
        /**
         * Is it a checkbox or a radio button
         */
        type: PropTypes.oneOf(['checkbox', 'radio']),
        /**
         * Validation state the input field is currently in
         */
        validationState: PropTypes.oneOf(['default', 'valid', 'invalid'])
    };
    static defaultProps = {
        checked: false,
        disabled: false,
        type: 'checkbox',
        validationState: 'default',
        value: ''
    };

    constructor(props, context) {
        super(props, context);

        //this.handleChange = this.handleChange.bind(this);

        this.state = {
            checked: this.props.checked
        };
    }

    toggleCheckbox = () => {
        if(!this.props.disabled) {
            this.setState(({checked}) => (
                {
                    checked: !checked
                }
            ));
        }
    };

    render() {
        const typeClassName = this.props.type === 'checkbox' ? 'custom-checkbox' : 'custom-radio';
        return (
            <div className={this.state.formGroupClass}>
                <div className={cx(styles['custom-control'], styles[typeClassName])}                >
                    <input checked={this.state.checked}
                           className={styles['custom-control-input']}
                           disabled={this.props.disabled}
                           id={this.props.id}
                           name={this.props.name}
                           type={this.props.type}
                           onChange={this.toggleCheckbox}
                    />
                    <label className={styles['custom-control-label']}
                           htmlFor={this.props.id}
                           onClick={this.toggleCheckbox}
                    >
                        {this.props.label}
                    </label>
                </div>
            </div>
        );
    }
}