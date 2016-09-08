import React, {PropTypes} from "react";
import ReactComponent from "../../reactComponent";
import cx from "classnames";
import Portal from "../../react-utils/portal";
import Stick from "../../react-utils/stick";
import styles from "./popover.scss";

export default class PopOver extends ReactComponent {
    static propTypes = {
        children: PropTypes.node.isRequired,
        header: PropTypes.string.isRequired,
        content: PropTypes.string.isRequired,
        className: PropTypes.string,
        fixed: PropTypes.bool,
        positioning: PropTypes.oneOf([
            'top',
            'bottom',
            'left',
            'right'
        ]).isRequired,
    };

    getInitState() {
        return {
            showing: false
        };
    }

    showPopOver() {
        this.setState({
            showing: true
        });
    }

    hidePopOver() {
        this.setState({
            showing: false
        });
    }

    onMouseEnter() {
        this.timeout = setTimeout(::this.showPopOver, 500);
    }

    onMouseLeave() {
        clearTimeout(this.timeout);
        this.hidePopOver();
    }

    render() {
        const {className} = this.props;

        return (
            <div
                className={className || styles.root}
                onMouseEnter={::this.onMouseEnter}
                ref={c => {this._handler = c}}
            >
                {this.props.children}
                {this.renderPopOver()}
            </div>
        );
    }

    renderPopOver() {
        if (this.state.showing) {
            const {header, content} = this.props;

            return (
                <Portal>
                    <Stick
                        element={this._handler}
                        positioning={this.props.positioning}
                        verticalOffset={150}
                    >
                        <div className="popover">
                            <div className={cx(styles.popoverArrow, styles[this.props.positioning])}></div>
                            <h3 className="popover-title">
                                {header}
                            </h3>
                            <div className="popover-content">
                                {content}
                            </div>
                        </div>
                    </Stick>
                </Portal>
            );
        }
    }
}