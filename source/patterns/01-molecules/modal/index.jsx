import React from 'react';
import PropTypes from 'prop-types';
import ReactComponent from '../../react-utils/component/index';
import Draggable from '../../react-utils/draggable';
import cx from 'classnames';
import styles from './index.module.scss';

const MODAL_TYPES = [
    'primary',
    'secondary',
    'danger',
    'info',
    'success',
    'warning',
    'default'
];
const MODAL_SIZES = [
    'lg',
    'sm',
    'md',
    'xs',
    'xl'
];

export default class Modal extends ReactComponent {


    getInitState() {
        return {
            searchQuery: '',
            classAlreadyExists: false
        };
    }

    componentDidMount() {
        if (this.props.visible) {
            if (document.body.classList.contains(styles['modal-open'])) {
                this.setState({
                    classAlreadyExists: true
                });
            }
            document.body.classList.add(styles['modal-open']);
        }
    }

    componentWillUnmount() {
        if (!this.state.classAlreadyExists) {
            document.body.classList.remove(styles['modal-open']);
        }
    }

    componentWillReceiveProps(nextProps) {
        if (!this.props.visible && nextProps.visible) {
            document.body.classList.add(styles['modal-open']);
        } else if (this.props.visible && !nextProps.visible) {
            document.body.classList.remove(styles['modal-open']);
        }
    }

    renderModalContent() {
        const {
            size,
            children,
            draggable,
            scrollable,
            type,
            className
        } = this.props;
        const componentClass = cx(
            styles['modal-dialog'],
            styles[`modal-${size}`],
            styles[`modal-${type}`],
            draggable && styles['modal-draggable'],
            scrollable && styles['modal-scrollable'],
            className
        );
        return (
            <div className={componentClass}>
                <div className={cx(styles['modal-content'], styles[`modal-content-${size}`])}>
                    {children}
                </div>
            </div>
        );
    }

    renderDragableWrapper() {
        return (
            <Draggable
                enabled
                handle={styles['modal-header']}
            >
                {this.renderModalContent()}
            </Draggable>
        );
    }

    render() {
        const {visible, draggable, modalBackdrop} = this.props;
        return (
            <div>
                <div
                    className={cx(styles.modal, (visible) && styles.show)}
                >
                    {draggable ? this.renderDragableWrapper() : this.renderModalContent()}
                </div>
                {(!draggable && modalBackdrop) &&
                <div className={cx(visible && styles['modal-backdrop'])}/>
                }
            </div>
        );
    }
};

Modal.propTypes = {
  /**
   * The CSS className for this component
   */
  className: PropTypes.string,
  /**
   * Sets the size of the button. Available sizes: xl, lg, md, sm, xs
   */
  size: PropTypes.oneOf(MODAL_SIZES),
  /**
   * Determines the default styling of the button. Available primary, secondary, danger, info, success, warning, default
   */
  type: PropTypes.oneOf(MODAL_TYPES),
  /**
   * Is the modal visible?
   */
  visible: PropTypes.bool,
  modalBackdrop: PropTypes.bool,
  children: PropTypes.node.isRequired,
  draggable: PropTypes.bool,
  scrollable: PropTypes.bool
};

Modal.defaultProps = {
  type: 'default',
  saveText: 'Speichern',
  closeText: 'Abbrechen',
  visible: true,
  modalBackdrop: true,
  draggable: false,
  scrollable: false,
  size: 'sm'
};
