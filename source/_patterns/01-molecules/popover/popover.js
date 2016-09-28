import React, {PropTypes} from "react";
import ReactComponent from "../../react-utils/component";
import cx from "classnames";
import Portal from "../../react-utils/portal";
import Stick from "../../react-utils/stick";
import styles from "./popover.scss";

export default class PopOver extends ReactComponent {
    static propTypes = {
        children: PropTypes.element.isRequired,
        className: PropTypes.string,
        title: PropTypes.string,
        content: PropTypes.element.isRequired,
        open: PropTypes.bool,
        positioning: PropTypes.oneOf([
            'top',
            'bottom',
            'left',
            'right'
        ]),
        zIndex: PropTypes.number
    };

    static defaultProps = {
        positioning: "top",
        open: false,
        zIndex: 1060
    };

    getInitState() {
        return {
            showing: this.props.open
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

    calculateVerticalOffset() {
        if (this.props.positioning === 'top') return 20;
        else if (this.props.positioning === 'bottom') return -20;
    }

    calculateHorizontalOffset() {
        if (this.props.positioning === 'left') return -130;
        else if (this.props.positioning === 'right') return 20;
    }

    renderPopOver() {
        if (this.state.open) {
            return (
                <Portal>
                    <Stick
                        element={this._handler}
                        positioning={this.props.positioning}
                        verticalOffset={this.calculateVerticalOffset()}
                        horizontalOffset={this.calculateHorizontalOffset()}
                        zIndex={this.props.zIndex}
                    >
                        <div className={cx(styles.popover, styles[`popover-${this.props.positioning}`])}>
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
                ref={c => {
                    this._handler = c
                }}
            >
                {this.props.children}
                {this.renderPopOver()}
            </div>
        );
    }
}