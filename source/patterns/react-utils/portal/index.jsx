import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';
import ReactComponent from '../component';

export default class Portal extends ReactComponent {
    static propTypes = {
        /**
         * Children which should be shown in the portal
         */
        children: PropTypes.node.isRequired,
        /**
         * DOM-Node where the portal should be rendered to
         */
        attachToNode: PropTypes.object,
        /**
         * Should the DOM-Node be replaced by the children?
         */
        replace: PropTypes.bool
    };

    static defaultProps = {
        replace: false
    };

    componentWillMount() {
        if (this.props.replace) {
            this.props.attachToNode.innerHTML = '';
        }
        this._target = this.props.attachToNode ? this.props.attachToNode.appendChild(document.createElement('div')) : document.body.appendChild(document.createElement('div'));
        // this._target.classList.add(styles.portal);
    }

    componentWillUnmount() {
        if (this.props.attachToNode) {
            this.props.attachToNode.removeChild(this._target);
        } else {
            document.body.removeChild(this._target);
        }
    }

    render() {
        return ReactDOM.createPortal(
            this.props.children,
            this._target,
        );
    }
}