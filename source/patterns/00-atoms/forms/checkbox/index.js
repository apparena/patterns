import React from 'react';
import PropTypes from 'prop-types';
import ReactComponent from '../../../react-utils/component';
import Tooltip from '../../../01-molecules/tooltip/tooltip';
import cx from 'classnames';
import Toggle from 'react-toggle';
import styles from './checkbox.scss';

export default class Checkbox extends ReactComponent {
    static propTypes = {
        /**
         * Additional classNames for the checkbox
         */
        className: PropTypes.string,
        /**
         * The css z-index attribute
         */
        zIndex: PropTypes.number,
        /**
         * Should this checkbox be disabled?
         */
        disabled: PropTypes.bool,
        /**
         * Is this checkbox checked?
         */
        checked: PropTypes.bool,
        /**
         * Function that's called whenever this checkbox changes its state
         */
        onChange: PropTypes.func.isRequired,
        /**
         * ID of the checkbox
         */
        id: PropTypes.string,
        /**
         * Should a tooltip be rendered as well?
         */
        renderTooltip: PropTypes.bool,
        /**
         * Sets the position of the tooltip
         */
        positioning: PropTypes.oneOf([
            'top',
            'bottom',
            'left',
            'right',
            'top left',
            'top center',
            'top right',
            'right top',
            'right middle',
            'right bottom',
            'bottom right',
            'bottom center',
            'bottom left',
            'left top',
            'left middle',
            'left bottom'
        ])
    };

    static defaultProps = {
        id: '',
        renderTooltip: true,
        positioning: 'top'
    };

    /**
     * Render the checkbox with a tooltip on hover.
     *
     * @returns {XML}
     */
    renderWithTooltip() {
        const {id, positioning, checked, disabled, onChange, zIndex, name} = this.props;
        const cId = id.replace('_', '');
        return (
            <Tooltip
                zIndex={zIndex}
                positioning={positioning}
                label={checked ? 'Aktiviert' : 'Deaktiviert'}
            >
                <Toggle
                    id={cId}
                    disabled={disabled}
                    checked={checked}
                    onChange={onChange}
                    name={name}
                />
            </Tooltip>
        );
    }

    /**
     * Render the checkbox without a tooltip on hover.
     * @returns {XML}
     */
    renderWithoutTooltip() {
        const {id, checked, disabled, onChange, name} = this.props;
        const cId = id.replace('_', '');
        return (
            <Toggle
                id={cId}
                disabled={disabled}
                checked={checked}
                onChange={onChange}
                name={name}
            />
        );
    }

    render() {
        const {className} = this.props;
        return (
            <div className={cx(styles.checkbox, className)}>
                {this.props.renderTooltip ? this.renderWithTooltip() : this.renderWithoutTooltip()}
            </div>
        );
    }
}