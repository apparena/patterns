import React from 'react';
import PropTypes from 'prop-types';
import {ReactComponent} from 'apparena-patterns-react';

/**
 * Extend `ReactComponent` instead of Component of React-Package directy to
 * get posibility to use `this.t()` for translations and `getInitState()` for
 * setting inital State and bindings
 */
export default class MyAwesomeClass extends ReactComponent {
    /**
     * Define all your props should be passed to your Class
     * @type {{foo}}
     */
    static propTypes = {
        /**
         * What is this Prop for?
         */
        foo: PropTypes.string
    };


    /**
     * Use to Set Initial State and bindings
     * @returns {{}}
     */
    getInitState() {
        this.test = ::this.test;
        return {
            foo: this.props.foo
        };
    }

    test() {
        console.log('test');
    }

    render() {
        return (
            <div>
                {this.t('my.translation')}
            </div>
        );
    }
}