import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import ReactComponent from '../component';
import styles from './stick.scss';

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
  'overlay',
];

export default class Stick extends ReactComponent {
  getInitState() {
    return {
      left: 0,
      height: 0,
      width: 0,
      top: 0,
    };
  }

  componentDidMount() {
    // this.mousewheelevt = (/Firefox/i.test(navigator.userAgent)) ? 'DOMMouseScroll' : 'mousewheel';
    // this.scrollBind = ::this.onScroll;
    // this.resizeBind = ::this.onResize;
    // this.onCloseBind = ::this.onClose;
    // document.body.addEventListener(this.mousewheelevt, this.scrollBind, false);
    // window.addEventListener('resize', this.resizeBind, false);
    // this.props.onClose && document.body.addEventListener('mousedown', this.onCloseBind, false); // eslint-disable-line
    this.updatePosition();
  }

  // componentDidUpdate(prevProps, prevState, prevContext) {
  //     if (prevProps.element !== this.props.element) {
  //         this.setState(this.getPosition());
  //     }
  // }

  // componentWillUnmount() {
  //     if (this.props.fixed) {
  //         document.body.removeEventListener(this.mousewheelevt, this.scrollBind);
  //         window.removeEventListener('resize', this.resizeBind);
  //         this.props.onClose && document.body.removeEventListener('mousedown', this.onCloseBind); // eslint-disable-line
  //     }
  // }

  // onClose(event) {
  //     const rect = this.props.element.getBoundingClientRect();
  //     const thisRect = this.holder.getBoundingClientRect();
  //
  //     const outOfElement = (event.pageX < rect.left || event.pageX > rect.left + rect.width) ||
  //         (event.pageY < rect.top || event.pageY > rect.top + rect.height);
  //     const outOfThis = (event.pageX < thisRect.left || event.pageX > thisRect.left + thisRect.width) ||
  //         (event.pageY < thisRect.top || event.pageY > thisRect.top + thisRect.height);
  //
  //     if (outOfElement && outOfThis) {
  //         this.props.onClose();
  //     }
  // }
  //
  // onScroll() {
  //     this.updatePosition();
  // }
  //
  // onResize() {
  //     this.updatePosition();
  // }

  updatePosition() {
    if (this.holder) {
      this.setState(this.getPosition());
    }
  }

  getActualBoundingClientRect(node) {
    const rect = node.getBoundingClientRect();
    if (node.ownerDocument !== document) {
      const frameElement = node.ownerDocument.defaultView.frameElement;
      if (frameElement) {
        const frameRect = this.getActualBoundingClientRect(frameElement);
        rect.top += frameRect.top;
        rect.bottom += frameRect.top;
        rect.left += frameRect.left;
        rect.right += frameRect.left;
      }
    }
    return rect;
  }

  getPosition() {
    const position = {
      left: 0,
      top: 0,
      positioning: this.props.positioning,
    };
    const rect = this.getActualBoundingClientRect(this.props.element);
    const thisRect = this.getActualBoundingClientRect(this.holder);
    // const windowHeight = window.innerHeight;
    const windowWidth = window.innerWidth;
    const scrollTop = window.scrollY;

    const top = rect.top + document.body.scrollTop;
    const left = rect.left + document.body.scrollLeft;

    switch (this.props.positioning) {
      // LEFT
      case 'left':
        position.left = left - thisRect.width - this.props.offset;
        position.top = (top + (rect.height / 2)) - (thisRect.height / 2);
        break;
      case 'left top':
        position.left = left - thisRect.width - this.props.offset;
        position.top = top - (thisRect.height / 2);
        break;
      case 'left bottom':
        position.left = left - thisRect.width - this.props.offset;
        position.top = (top + rect.height) - (thisRect.height / 2);
        break;
        // RIGHT
      case 'right':
        position.left = left + rect.width + this.props.offset;
        position.top = (top + (rect.height / 2)) - (thisRect.height / 2);
        break;
      case 'right top':
        position.left = left + rect.width + this.props.offset;
        position.top = top - (thisRect.height / 2);
        break;
      case 'right bottom':
        position.left = left + rect.width + this.props.offset;
        position.top = (top + rect.height) - (thisRect.height / 2);
        break;
        // Top
      case 'top':
        position.left = (left + (rect.width / 2)) - (thisRect.width / 2);
        position.top = top - thisRect.height - this.props.offset;
        break;
      case 'top left':
        position.left = left - (thisRect.width / 2);
        position.top = top - thisRect.height - this.props.offset;
        break;
      case 'top right':
        position.left = (left + rect.width) - (thisRect.width / 2);
        position.top = top - thisRect.height - this.props.offset;
        break;
        // Bottom
      case 'bottom':
        position.left = (left + (rect.width / 2)) - (thisRect.width / 2);
        position.top = top + rect.height + this.props.offset;
        break;
      case 'bottom left':
        position.left = left - (thisRect.width / 2);
        position.top = top + rect.height + this.props.offset;
        break;
      case 'bottom right':
        position.left = (left + rect.width) - thisRect.width;
        position.top = top + rect.height + this.props.offset;
        break;
        // Overlay
      case 'overlay':
        position.top = top;
        position.left = left;
        position.width = rect.width;
        position.height = rect.height;
        break;
      default:
        position.left = (left + (rect.width / 2)) - (thisRect.width / 2);
        position.top = top - thisRect.height - this.props.offset;
        break;
    }

    /** Overflows */

    position.top += scrollTop;

    // if (position.top + thisRect.height > windowHeight) {
    //     position.top = top - thisRect.height - this.props.offset;
    // }
    if (position.left + thisRect.width > windowWidth) {
      position.left = (left + rect.width) - thisRect.width;
    }
    if (position.top < 0) {
      position.top = top + rect.height + this.props.offset;
    }

    return position;
  }

  render() {
    const { className, positioning } = this.props;
    let style = {
      zIndex: this.props.zIndex,
      left: this.state.left,
      top: this.state.top,
    };

    if (positioning === 'overlay') {
      style = {
        zIndex: this.props.zIndex,
        left: this.state.left,
        top: this.state.top,
        height: this.state.height,
        width: this.state.width,
      };
    }

    return (
      <div
        className={cx(styles.stick, className)}
        style={style}
        ref={c => (this.holder = c)}
      >
        {this.props.children}
      </div>
    );
  }
}

Stick.propTypes = {
  /**
   * Element the children should stick to
   */
  element: PropTypes.object.isRequired,
  /**
   * Children which should be display at the element
   */
  children: PropTypes.node.isRequired,
  /**
   * Additional classNames
   */
  className: PropTypes.string,
  /**
   * Transition animation of the element
   */
  transition: PropTypes.string,
  /**
   * Positioning of the element
   */
  positioning: PropTypes.oneOf(POSITIONING),
  /**
   * Offset of the element
   */
  offset: PropTypes.number,
  /**
   * Function to remove the stick element
   */
  onClose: PropTypes.func,
  /**
   * Z-Index of the element
   */
  zIndex: PropTypes.number,
};

Stick.defaultProps = {
  transition: 'fadeIn',
  positioning: 'top',
  offset: 0,
  zIndex: 1030,
  overlay: false,
};
