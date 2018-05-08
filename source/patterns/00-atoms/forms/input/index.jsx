import React from 'react';
import PropTypes from 'prop-types';
import styles from './index.scss';
import cx from 'classnames';


export default class Input extends React.Component {

    static propTypes = {
        /**
         * Should the input field automatically being focused on load?
         */
        autoFocus: PropTypes.bool,
        /**
         * CSS classes
         */
        className: PropTypes.string,
        /**
         * If the input field is disabled or not
         */
        disabled: PropTypes.bool,
        /**
         * Classname for an icon to be added to the beginning of the input field, e.g. 'icon icon-search'
         */
        icon: PropTypes.string,
        /**
         * ID of the input field. This is required as the Label needs to be assigned to the input field via ID
         */
        id: PropTypes.string,
        /**
         * Name of the input field
         */
        name: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
        /**
         * Gets called when the user changes the input field
         *
         * @param {SyntheticEvent} event The react `SyntheticEvent`
         */
        onChange: PropTypes.func.isRequired,
        /**
         * HTML5 placeholder
         */
        placeholder: PropTypes.string,
        /**
         * HTML tab index
         */
        tabIndex: PropTypes.number,
        /**
         * What type of input field should get rendered
         * @see https://www.w3schools.com/html/html_form_input_types.asp HTML5 Input types
         */
        type: PropTypes.string,
    };

    static defaultProps = {
        autoFocus: false,
        disabled: false,
        icon: false,
        tabIndex: 0,
        type: 'text',
    };

    render() {

        const className = cx(
            styles['form-control'],
            ((navigator.userAgent.indexOf('MSIE') !== -1) || (!!document.documentMode === true)) && styles['input-ie-fix'],
            this.props.className
        );

        // If an item is submitted, then
        if (this.props.icon) {
            return (
                <div className={styles.withIcon}>
                    <i className={this.props.icon}></i>
                    <input {...this.props} className={className} />
                </div>

            );
        }

        return (
            <input {...this.props} className={className} />
        );
    }
}
