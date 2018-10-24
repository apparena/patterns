import React from 'react';
import PropTypes from 'prop-types';
import { ReactComponent } from 'apparena-patterns-react';

/**
 * Extend `ReactComponent` instead of Component of React-Package directy to
 * get posibility to use `ReactComponent.t()` for translations and `getInitState()` for
 * setting inital State and bindings
 */
export default class MyAwesomeClass extends ReactComponent {
  /**
     * Use to Set Initial State and bindings
     * @returns {{}}
     */
  getInitState() {
    this.test = this.test.bind(this);
    return {
      foo: this.props.foo,
    };
  }

  test() {
    console.log('test');
  }

  render() {
    return (
      <div>
        {ReactComponent.t('my.translation')}
      </div>
    );
  }
}
/**
 * Define all your props should be passed to your Class
 * @type {{foo}}
 */
MyAwesomeClass.propTypes = {
  /**
   * What is this Prop for?
   */
  foo: PropTypes.string,
};
