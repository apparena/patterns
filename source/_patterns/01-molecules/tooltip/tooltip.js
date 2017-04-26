import React from "react";
import PropTypes from "prop-types";
import ReactComponent from "../../react-utils/component";
import cx from "classnames";
import Portal from "../../react-utils/portal";
import Stick from "../../react-utils/stick";
import styles from "./tooltip.scss";

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
        children: PropTypes.node.isRequired,
        label: PropTypes.string.isRequired,
        transition: PropTypes.string,
        className: PropTypes.string,
        positioning: PropTypes.oneOf(POSITIONING),
        zIndex: PropTypes.number,
    };

    static defaultProps = {
        transition: "fadeIn",
        positioning: "top"
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
                        <div className={cx(styles.tooltip, styles[this.props.positioning.split(" ")[0]])}>
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
                    this._handler = c
                }}
            >
                {this.props.children}
                {this.renderTooltip()}
            </div>
        );
    }
}