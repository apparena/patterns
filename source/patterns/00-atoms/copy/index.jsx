import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import Clipboard from 'clipboard';
import ReactComponent from '../../react-utils/component';
import Tooltip from '../../01-molecules/tooltip';
import Icon from '../icons/index';
import styles from './index.scss';

export default class Copy extends ReactComponent {
  getInitState() {
    this.handleRefBind = (ref) => {
      this._copyHandler = ref;
    };
    return {
      label: this.t('copy.copy'),
    };
  }

  resetLabel() {
    this.setState({
      label: this.t('copy.copy'),
    });
  }

  componentDidMount() {
    const options = { ...this.props.options };
    this.clipboard = new Clipboard(this._copyHandler, options);
    this.clipboard.on('success', (e) => {
      this.setState({
        label: this.t('copy.copied'),
      }, () => {
        setTimeout(this.resetLabel.bind(this), 3000);
      });
      e.clearSelection();
    });

    this.clipboard.on('error', (e) => {
      this.setState({
        label: this.t('copy.error'),
      }, () => {
        setTimeout(this.resetLabel.bind(this), 3000);
      });
    });
  }

  componentWillUnmount() {
    this.clipboard.destroy();
  }


  render() {
    const { text, className, rows } = this.props;
    return (
      <figure
        className={cx(styles.root, className)}
        ref={this.handleRefBind}
        data-clipboard-text={text}
      >
        <div className={styles.clipboard}>
          <Tooltip label={this.state.label}>
            <Icon name="clipboard" />
          </Tooltip>
        </div>
        <Tooltip className={styles.area} label={this.state.label}>
          <textarea readOnly="1" rows={rows} spellCheck="false" value={text} />
        </Tooltip>
      </figure>
    );
  }
}

Copy.propTypes = {
  options: PropTypes.object,
  className: PropTypes.string,
  text: PropTypes.string.isRequired,
};

Copy.defaultProps = {
  options: {},
};
