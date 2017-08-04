import React from 'react';
import {ReactComponent, Select} from 'apparena-patterns-react';

export default class MyAwesomeClass extends ReactComponent {

    getInitState() {
        this.onChange = ::this.onChange;
        return {
            value: 'action'
        };
    }

    onChange(obj) {
        this.setState({
            value: obj.value
        });

    }

    render() {
        return (
            <Select
                onChange={::this.change}
                defaultValue={this.state.value}
                options={['action', 'sci-fi', 'western']}
            />
        );
    }
}