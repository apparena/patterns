import {PropTypes} from 'react';
import ReactDOM from 'react-dom';
import ReactComponent from './component';

const renderSubtreeIntoContainer = ReactDOM.unstable_renderSubtreeIntoContainer;

export default class Portal extends ReactComponent {
    static propTypes = {
        children: PropTypes.node.isRequired,
        attachToNode: PropTypes.object,
        replace: PropTypes.bool
    };

    static defaultProps = {
        replace: false
    };

    componentDidMount() {
        if (this.props.replace) this.props.attachToNode.innerHTML = '';
        this._target = this.props.attachToNode ? this.props.attachToNode.appendChild(document.createElement('div')) : document.body.appendChild(document.createElement('div'));
        this._portal = renderSubtreeIntoContainer(this, this.props.children, this._target);
    }

    componentWillUpdate(nextProps, nextState, nextContext) {
        if (nextProps.attachToNode !== this.props.attachToNode) {
            ReactDOM.unmountComponentAtNode(this._target);
            if (this.props.attachToNode) {
                this.props.attachToNode.removeChild(this._target);
            } else {
                document.body.removeChild(this._target);
            }
            this._target = nextProps.attachToNode ? nextProps.attachToNode.appendChild(document.createElement('div')) : document.body.appendChild(document.createElement('div'));
        }
    }


    componentDidUpdate() {
        this._portal = renderSubtreeIntoContainer(this, this.props.children, this._target);
    }

    componentWillUnmount() {
        ReactDOM.unmountComponentAtNode(this._target);
        if (this.props.attachToNode) {
            this.props.attachToNode.removeChild(this._target);
        } else {
            document.body.removeChild(this._target);
        }
    }

    render() {
        return null;
    }
}