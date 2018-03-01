import React from 'react';
import {CustomControl} from 'apparena-patterns-react';

export default class FormCustomControlExample extends React.Component {

    constructor(props, context) {
        super(props, context);
        this.state = {clickHandlerText:''};
    }

    handleClick(event) {
        const { target: { value } } = event;
        this.setState({
            clickHandlerText: `Checkbox is ${value}`
        });
    }

    render() {
        return (
            <div>
                <h3>Checkboxes</h3>
                <CustomControl
                    label="Simple Checkbox"
                    name="simple-checkbox"
                    type="checkbox"
                    value="off"
                />
                <CustomControl
                    checked
                    label="Simple Checkbox checked"
                    name="simple-checkbox-checked"
                    type="checkbox"
                    value="on"
                />
                <CustomControl
                    checked
                    disabled
                    label="Simple Checkbox disabled"
                    name="simple-checkbox-disabled"
                    type="checkbox"
                    value="on"
                />
                <CustomControl
                    checked
                    label="Simple Checkbox with click handler"
                    name="simple-checkbox-clickHandler"
                    type="checkbox"
                    onChange={this.handleClick.bind(this)}
                />
                <input className={'form-control'} type="text" value={this.state.clickHandlerText}/>

                <hr/>

                <h3>Radio buttons</h3>
                <CustomControl
                    label="Simple Radio"
                    name="simple-radio"
                    type="radio"
                    value="off"
                />
                <CustomControl
                    checked
                    label="Simple Radio checked"
                    name="simple-radio-checked"
                    type="radio"
                    value="on"
                />
                <CustomControl
                    checked
                    disabled
                    label="Simple Radio disabled"
                    name="simple-radio-disabled"
                    type="radio"
                    value="on"
                />
            </div>
        );
    }

}