/**
 * External dependencies
 */
import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import { ReactComponent } from '../../index';
import styles from './index.scss';


export default class AsyncLoad extends ReactComponent {
  getInitState() {
    return {
      component: null,
    };
  }

  componentWillMount() {
    this.require();
  }

  componentDidUpdate(prevProps) {
    // Our Babel transform will hoist the require function in the rendering
    // component, so we can compare the reference with confidence
    if (this.props.require !== prevProps.require) {
      this.require();
    }
  }

  require() {
    this.props.require((component) => {
      this.setState({ component });
    });
  }

  render() {
    const { placeholder, ...props } = this.props;
    if (this.state.component) {
      if (this.state.component.__esModule) {
        return <this.state.component.default {...props} />;
      } else {
        return <this.state.component {...props} />;
      }
    }

    if (placeholder) {
      return placeholder;
    }

    return (
      <div className={cx(styles.animatedBackground)}>
        <div className={cx(styles.backgroundMasker, styles.contentFirstEnd)}/>
        <div className={cx(styles.backgroundMasker, styles.contentSecondLine)}/>
        <div className={cx(styles.backgroundMasker, styles.contentSecondEnd)}/>
        <div className={cx(styles.backgroundMasker, styles.contentThirdLine)}/>
        <div className={cx(styles.backgroundMasker, styles.contentThirdEnd)}/>
      </div>
    );
  }
}

AsyncLoad.propTypes = {
  require: PropTypes.func.isRequired,
  placeholder: PropTypes.node,
};
