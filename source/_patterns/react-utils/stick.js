import React, {PropTypes} from "react";
import cx from "classnames";
import Animate from "./animate";
import ReactComponent from "./component";
import styles from "./scss/stick.scss";

export default class Stick extends ReactComponent {
    static propTypes = {
        element: PropTypes.object.isRequired,
        children: PropTypes.node.isRequired,
        className: PropTypes.string,
        transition: PropTypes.string,
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
            'left bottom']),
        verticalOffset: PropTypes.number,
        horizontalOffset: PropTypes.number,
        onClose: PropTypes.func,
        overlay: PropTypes.bool,
        zIndex: PropTypes.number,
    };

    static defaultProps = {
        transition: "fadeIn",
        positioning: "top center",
        verticalOffset: 0,
        horizontalOffset: 0,
        zIndex: 1030,
        overlay: false
    };

    getInitState() {
        return {
            left: 0,
            height: 0,
            width: 0,
            top: 0
        };
    }

    componentDidMount() {
        this.mousewheelevt = (/Firefox/i.test(navigator.userAgent)) ? "DOMMouseScroll" : "mousewheel";
        // this.scrollBind = ::this.onScroll;
        this.resizeBind = ::this.onResize;
        this.onCloseBind = ::this.onClose;
        // document.body.addEventListener(this.mousewheelevt, this.scrollBind, false);
        window.addEventListener("resize", this.resizeBind, false);
        this.props.onClose && document.body.addEventListener("mousedown", this.onCloseBind, false); // eslint-disable-line
        this.updatePosition();
    }

    componentDidUpdate(prevProps, prevState, prevContext) {
        if (prevProps.element !== this.props.element) {
            this.setState(this.getPosition());
        }
    }

    componentWillUnmount() {
        if (this.props.fixed) {
            // document.body.removeEventListener(this.mousewheelevt, this.scrollBind);
            window.removeEventListener("resize", this.resizeBind);
            this.props.onClose && document.body.removeEventListener("mousedown", this.onCloseBind); // eslint-disable-line
        }
    }

    onClose(event) {
        const rect = this.props.element.getBoundingClientRect();
        const thisRect = this.holder.getBoundingClientRect();

        const outOfElement = (event.pageX < rect.left || event.pageX > rect.left + rect.width) ||
            (event.pageY < rect.top || event.pageY > rect.top + rect.height);
        const outOfThis = (event.pageX < thisRect.left || event.pageX > thisRect.left + thisRect.width) ||
            (event.pageY < thisRect.top || event.pageY > thisRect.top + thisRect.height);

        if (outOfElement && outOfThis) {
            this.props.onClose();
        }
    }

    onScroll() {
        this.updatePosition();
    }

    onResize() {
        this.updatePosition();
    }

    updatePosition() {
        if (this.holder) {
            this.setState(this.getPosition());
        }
    }

    getPosition() {
        const position = {
            left: 0,
            top: 0,
            positioning: this.props.positioning
        };
        const rect = this.props.element.getBoundingClientRect();
        const {overlay} = this.props;
        const thisRect = this.holder.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        const windowWidth = window.innerWidth;

        let top = rect.top + document.body.scrollTop;
        let left = rect.left + document.body.scrollLeft;

        switch (this.props.positioning) {
            // LEFT
            case "left":
            case "left middle":
                position.left = left;
                position.top = (top + (rect.height / 2)) - (thisRect.height / 2);
                break;
            case "left top":
            case "top left":
                position.left = left;
                position.top = top - thisRect.height - this.props.verticalOffset;
                break;
            case "left bottom":
            case "bottom left":
                position.left = left;
                position.top = (top + rect.height) - this.props.verticalOffset;
                break;

            // MIDDLE
            case "top":
            case "top center":
                position.left = (left + (rect.width / 2)) - (thisRect.width / 2);
                position.top = top - thisRect.height - this.props.verticalOffset;
                break;
            case "bottom":
            case "bottom center":
                position.left = (left + (rect.width / 2)) - (thisRect.width / 2);
                position.top = (top + rect.height) - this.props.verticalOffset;
                break;

            // RIGHT
            case "right":
            case "right middle":
                position.left = left + rect.width;
                position.top = (top + (rect.height / 2)) - (thisRect.height / 2);
                break;
            case "right top":
            case "top right":
                position.left = left + rect.width;
                position.top = top - thisRect.height - this.props.verticalOffset;
                break;
            case "right bottom":
            case "bottom right":
                position.left = left + rect.width;
                position.top = (top + rect.height) - this.props.verticalOffset;
                break;
            default:
                position.left = 0;
                position.top = 0;
                break;
        }

        position.left += this.props.horizontalOffset;

        // Overflows
        if (position.top + thisRect.height > windowHeight) {
            position.top = top - thisRect.height - this.props.verticalOffset;
            position.vertical = "top";
        }
        if (position.left + thisRect.width > windowWidth) {
            position.left = (left + rect.width) - thisRect.width - this.props.horizontalOffset;
            position.horizontal = "right";
        }
        if (position.top < 0 && position.vertical !== "bottom") {
            position.top = top + rect.height + this.props.verticalOffset;
            position.vertical = "bottom";
        }

        if (overlay) {
            position.top = top;
            position.left = left;
            position.width = rect.width;
            position.height = rect.height;
        }

        return position;
    }

    render() {
        const {transition, className, overlay} = this.props;
        // const {vertical, horizontal} = this.state;
        let style = {
            zIndex: this.props.zIndex,
            left: this.state.left,
            top: this.state.top,
        };

        if (overlay) {
            style = {
                zIndex: this.props.zIndex,
                left: this.state.left,
                top: this.state.top,
                height: this.state.height,
                width: this.state.width,
            };
        }

        return (
            <Animate transition={transition}>
                <div className={cx(styles.stick, className)}
                     style={style}
                     ref={c=> (this.holder = c)}
                >
                    {this.props.children}
                </div>
            </Animate>
        );
    }
}
