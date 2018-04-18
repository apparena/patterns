import React from 'react';
import PropTypes from 'prop-types';
import ReactComponent from '../../../react-utils/component/index.jsx';

export default class RadioButton extends ReactComponent {
    static propTypes = {
        text: PropTypes.string,
        onClick: PropTypes.func,
        checked: PropTypes.bool,
        name: PropTypes.string
    };

    static defaultProps = {
        text: 'identifier missing!',
        checked: false,
        name: 'radioButton'
    };

    render() {
        return (
            <div className="form-check">
                <div className="radio">
                    <label className="form-check-label">
                        <input type="radio" onChange={this.props.onClick} checked={this.props.checked} name={this.props.name}/>
                        {this.props.text}
                    </label>
                </div>
            </div>
        );
    };
}