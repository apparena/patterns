import React, {PropTypes} from "react";
import ReactComponent from "../../react-utils/component";
import cx from "classnames";
import Portal from "../../react-utils/portal";
import Stick from "../../react-utils/stick";
import styles from "./tooltip.scss";

export default class Tooltip extends ReactComponent {
    static propTypes = {
        children: PropTypes.node.isRequired,
        label: PropTypes.string.isRequired,
        className: PropTypes.string,
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
        ]),
        zIndex: PropTypes.number,
    };

    static defaultProps = {
        positioning: 'top center'
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
        this.timeout = setTimeout(::this.showTooltip, 500);
    }

    onMouseLeave() {
        clearTimeout(this.timeout);
        this.hideTooltip();
    }

    render() {
        const {className} = this.props;

        return (
            <div
                className={className || styles.root}
                onMouseEnter={::this.onMouseEnter}
                onMouseLeave={::this.onMouseLeave}
                ref={c => {this._handler = c}}
            >
                {this.props.children}
                {this.renderTooltip()}
            </div>
        );
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
                    >
                        <div className={cx(styles.tooltip, styles[this.props.positioning.split(" ")[0]])}>
                            {label}
                        </div>
                    </Stick>
                </Portal>
            );
        }
    }
}