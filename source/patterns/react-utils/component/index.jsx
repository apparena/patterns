import React from 'react';
import i18n from 'i18n-js';

/**
 * Extends the react Base component by injecting additional functionality like translations
 * @deprecated Do not use this Component any more as it will be removed in a future major relase.
 * User React.Component and replace the getInitState Function with a normal constructor from react,
 * also create your own function that this component would add.
 */
export default class BaseComponent extends React.Component {
  constructor(props, children) {
    super(props, children);
    console.warn('The ReactComponent will be removed in the next major release. Replace this component with React.Component coming from React.');
    this.state = this.getInitState ? this.getInitState() : {};
  }

  getChildrenArray(children) {
    return React.Children.map(children, (child) => {
      if (React.isValidElement(child)) {
        return React.cloneElement(child, child.props);
      }
    });
  }

  t(id, data = false) {
    if (data) {
      return i18n.t(id, data);
    }
    return i18n.t(id);
  }
}
