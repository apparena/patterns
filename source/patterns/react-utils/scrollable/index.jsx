import React from 'react';
import PropTypes from 'prop-types';
import ReactComponent from '../component';
import cx from 'classnames';
import GeminiScrollbar from 'react-gemini-scrollbar';
import styles from './scrollable.scss';

export default class Scrollable extends ReactComponent {


    componentDidMount() {
        const {lazyLoad, onScroll} = this.props;
        if (lazyLoad) {
            this.refs.gemini.refs['scroll-view'].addEventListener('scroll', this.onScroll.bind(this));
        }
        if (onScroll) {
            this.refs.gemini.refs['scroll-view'].addEventListener('scroll', onScroll);
        }
    }

    componentWillUnmount() {
        const {lazyLoad, onScroll} = this.props;
        if (lazyLoad && this.refs.gemini.refs['scroll-view']) {
            this.refs.gemini.refs['scroll-view'].removeEventListener('scroll', this.onScroll.bind(this));
        }
        if (onScroll && this.refs.gemini.refs['scroll-view']) {
            this.refs.gemini.refs['scroll-view'].removeEventListener('scroll', onScroll);
        }
    }

    onScroll(event) {
        const {loadMoreTrigger, loadMore} = this.props;
        const {clientHeight, scrollTop, scrollHeight} = event.target || event.srcElement;

        const toScroll = scrollHeight - clientHeight;
        const needsToLoadMore = (toScroll - scrollTop) < loadMoreTrigger;

        if (needsToLoadMore) {
            loadMore();
        }
    }

    render() {
        return (
            <div className={cx(this.props.className || styles.root, styles.scrollbar)}>
                <GeminiScrollbar
                    autoshow={this.props.autoshow}
                    forceGemini
                    ref={(c) => {this.gemini = c;}}
                >
                    {this.props.children}
                </GeminiScrollbar>
            </div>
        );
    }
}

Scrollable.propTypes = {
  /**
   * Children show inside the scrollbox
   */
  children: PropTypes.node,
  /**
   * Show scrollbars upon hovering
   */
  autoshow: PropTypes.bool,
  /**
   * Addionital Classname
   */
  className: PropTypes.string,
  /**
   * Enable Lazy Loading
   */
  lazyLoad: PropTypes.bool,
  /**
   * Function called when the load more trigger is called
   */
  loadMore: PropTypes.func,
  /**
   * Position when the loadMore Function should be called
   */
  loadMoreTrigger: PropTypes.number,
  /**
   * Function called on scroll
   */
  onScroll: PropTypes.func
};

Scrollable.defaultProps = {
  autoshow: true,
  lazyLoad: false,
  loadMoreTrigger: 200
};
