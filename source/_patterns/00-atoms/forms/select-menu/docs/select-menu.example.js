import React from 'react';
import {ReactComponent, Select} from 'apparena-patterns-react';

export default class MyAwesomeClass extends ReactComponent {
    getInitState() {
        this.onChange = ::this.onChange;
        this.options = [
            {label: 'action', value: 'action'},
            {label: 'sci-fi', value: 'sci-fi'},
            {label: 'western', value: 'western'}
        ];
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
                onChange={this.onChange}
                defaultValue={this.state.value}
                options={this.options}
            />
        );
    }
}