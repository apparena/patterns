import React from 'react';
import i18n from 'i18n-js';

/**
 * Extends the react Base component by injecting additional functionality like translations
 */
export default class BaseComponent extends React.Component {
  constructor(props, children) {
    super(props, children);
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
