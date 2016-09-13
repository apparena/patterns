import React, {PropTypes} from "react";
import ReactComponent from "../../react-utils/component";
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

    onMouseClick() {
        this.setState({
            showing: !this.state.showing
        });
    }

    render() {
        const {className} = this.props;

        return (
            <div
                className={className || styles.root}
                onClick={::this.onMouseClick}
                ref={c => {this._handler = c}}
            >
                {this.props.children}
                {this.renderPopOver()}
            </div>
        );
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
        if (this.state.showing) {
            const {header, content} = this.props;

            return (
                <Portal>
                    <Stick
                        element={this._handler}
                        positioning={this.props.positioning}
                        verticalOffset={this.calculateVerticalOffset()}
                        horizontalOffset={this.calculateHorizontalOffset()}
                    >
                        <div className={styles.popover}>
                            <div className={cx(styles.popoverShadowArrow, styles[this.props.positioning + '-shadow'])}></div>
                            <div className={cx(styles.popoverArrow, styles[this.props.positioning])}></div>
                            <h3 className={styles['popover-title']}>
                                {header}
                            </h3>
                            <div className={styles['popover-content']}>
                                {content}
                            </div>
                        </div>
                    </Stick>
                </Portal>
            );
        }
    }
}