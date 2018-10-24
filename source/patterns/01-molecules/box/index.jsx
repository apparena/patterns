import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import ReactComponent from '../../react-utils/component/index';
import Button from '../../00-atoms/button';
import styles from './index.scss';

const NO_OP = () => undefined;

export default class Copy extends ReactComponent {
  renderContent() {
    const {
      imgSrc,
      headline,
      text,
      btnText,
      onClick,
    } = this.props;
    return (
      <div>
        {
                    imgSrc
                      ? (
                        <div className={styles.img}>
                          <img src={imgSrc} />
                        </div>
                      ) : ''
                }
        <h3>{headline}</h3>
        {text && <p>{text}</p>}
        {(onClick && btnText)
                && (
                <Button
                  className={styles.btn}
                  onClick={onClick}
                  type="primary"
                >
                  {btnText}
                </Button>
                )
                }
      </div>
    );
  }

  render() {
    const {
      btnText,
      onClick,
      className,
      href,
      props,
    } = this.props;
    if (href) {
      return (
        <a
          className={cx(styles.root, className)}
          href={href}
          {...props}
        >
          {this.renderContent()}
        </a>
      );
    }
    return (
      <div
        className={cx(styles.root, (onClick && !btnText) && styles.clickable, className)}
        onClick={(onClick && !btnText) ? onClick : NO_OP}
      >
        {this.renderContent()}
      </div>
    );
  }
}

Copy.propTypes = {
  className: PropTypes.string,
  imgSrc: PropTypes.string,
  href: PropTypes.string,
  headline: PropTypes.string.isRequired,
  text: PropTypes.string,
  btnText: PropTypes.string,
  onClick: PropTypes.func,
};
