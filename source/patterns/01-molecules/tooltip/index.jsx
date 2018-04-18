import React from 'react';
import PropTypes from 'prop-types';
import ReactComponent from '../../react-utils/component/index.jsx';
import cx from 'classnames';
import Portal from '../../react-utils/portal';
import Stick from '../../react-utils/stick';
import styles from './index.scss';

const POSITIONING = [
    'top',
    'top left',
    'top right',
    'bottom',
    'bottom left',
    'bottom right',
    'left',
    'left top',
    'left bottom',
    'right',
    'right top',
    'right bottom',
    'overlay'
];

export default class Tooltip extends ReactComponent {
    static propTypes = {
        /**
         * Defines the element which should get the tooltip
         */
        children: PropTypes.node.isRequired,
        /**
         * Sets the text of the tooltip
         */
        label: PropTypes.string.isRequired,
        /**
         * Deprecated
         */
        transition: PropTypes.string,
        /**
         * Additional classNames
         */
        className: PropTypes.string,
        /**
         * Set the position of the tooltip
         */
        positioning: PropTypes.oneOf(POSITIONING),
        /**
         * Set the HTML zIndex property
         */
        zIndex: PropTypes.number
    };

    static defaultProps = {
        transition: 'fadeIn',
        positioning: 'top'
    };

    getInitState() {
        return {
            showing: false
        };
    }

    showTooltip() {
        this.setState({
            showing: true
        });
    }

    hideTooltip() {
        this.setState({
            showing: false
        });
    }

    onMouseEnter() {
        this.timeout = setTimeout(::this.showTooltip, 0);
    }

    onMouseLeave() {
        clearTimeout(this.timeout);
        this.hideTooltip();
    }

    renderTooltip() {
        if (this.state.showing) {
            const {label} = this.props;

            return (
                <Portal>
                    <Stick
                        element={this._handler}
                        positioning={this.props.positioning}
                        fixed={this.props.fixed}
                        zIndex={this.props.zIndex}
                        transition={this.props.transition}
                        offset={10}
                    >
                        <div className={cx(styles.tooltip, styles[this.props.positioning.split(' ')[0]])}>
                            {label}
                        </div>
                    </Stick>
                </Portal>
            );
        }
    }

    render() {
        const {className} = this.props;

        return (
            <div
                className={className || styles.root}
                onMouseEnter={::this.onMouseEnter}
                onMouseLeave={::this.onMouseLeave}
                ref={(c) => {
                    this._handler = c;
                }}
            >
                {this.props.children}
                {this.renderTooltip()}
            </div>
        );
    }
}