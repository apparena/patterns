import React from 'react';
import {ReactComponent, TagInput} from 'apparena-patterns-react';

export default class TagInputExample extends ReactComponent {
    getInitState() {
        this.handleTagInput = ::this.handleTagInput;

        return {
            options: [
                {label: 'action', value: 'action'},
                {label: 'sci-fi', value: 'sci-fi'},
                {label: 'western', value: 'western'},
            ],
            selected: ''
        }
    }

    handleTagInput(tag) {
        this.setState({
            selected: tag.value
        });
    }

    render() {
        return (
            <TagInput onChange={this.handleTagInput} value={this.state.selected} options={this.state.options}/>
        );
    }
}