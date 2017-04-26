import React from "react";
import PropTypes from "prop-types";
import ReactComponent from "../../react-utils/component";
import cx from "classnames";
import Portal from "../../react-utils/portal";
import Stick from "../../react-utils/stick";
import styles from "./popover.scss";

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

export default class PopOver extends ReactComponent {
    static propTypes = {
        children: PropTypes.element.isRequired,
        className: PropTypes.string,
        title: PropTypes.string,
        content: PropTypes.element,
        open: PropTypes.bool,
        positioning: PropTypes.oneOf(POSITIONING),
        zIndex: PropTypes.number
    };

    static defaultProps = {
        positioning: "top",
        open: false,
        zIndex: 1060
    };

    getInitState() {
        return {
            open: this.props.open
        };
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.open !== this.state.open) {
            this.setState({
                open: nextProps.open
            });
        }
    }

    toggleTooltip() {
        this.setState({
            open: !this.state.open
        });
    }

    renderPopOver() {
        if (this.state.open) {
            return (
                <Portal>
                    <Stick
                        element={this._handler}
                        positioning={this.props.positioning}
                        zIndex={this.props.zIndex}
                        offset={10}
                    >
                        <div
                            className={cx(styles.popoverRoot, styles.popover, styles[`popover-${this.props.positioning}`])}
                        >
                            <div className={styles["popover-arrow"]}></div>
                            {this.props.title && <h3 className={styles["popover-title"]}>{this.props.title}</h3>}
                            <div className={styles["popover-content"]}>
                                {this.props.content}
                            </div>
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
                onClick={::this.toggleTooltip}
                ref={(c) => {
                    this._handler = c
                }}
            >
                {this.props.children}
                {this.renderPopOver()}
            </div>
        );
    }
}