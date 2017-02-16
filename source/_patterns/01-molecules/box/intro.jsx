import React, {PropTypes} from "react";
import ReactComponent from "../../react-utils/component";
import Button from "../../00-atoms/button/button";
import Icon from "../../00-atoms/icons/icons";
import cx from "classnames";
import styles from "./intro.scss";

const NO_OP = () => undefined;

export default class Copy extends ReactComponent {
    static propTypes = {
        className: PropTypes.string,
        imgSrc: PropTypes.string,
        icon: PropTypes.string,
        href: PropTypes.string,
        headline: PropTypes.string.isRequired,
        text: PropTypes.string,
        btnText: PropTypes.string,
        onClick: PropTypes.func,
    };

    renderContent() {
        const {
            imgSrc,
            icon,
            headline,
            text,
            btnText,
            onClick,
        } = this.props;
        return (
            <div>
                {
                    imgSrc ?
                        <div className={styles.img}>
                            <img src={imgSrc} alt="presentation"/>
                        </div> :
                        <div className={styles.icon}>
                            <Icon name={icon} size="5x"/>
                        </div>
                }
                <h3>{headline}</h3>
                {text && <p>{text}</p>}
                {(onClick && btnText) &&
                <Button
                    className={styles.btn}
                    onClick={onClick}
                    type="primary"
                >
                    {btnText}
                </Button>
                }
            </div>
        )
    }

    render() {
        const {
            btnText,
            onClick,
            className,
            href
        } = this.props;
        if (href) {
            return (
                <a className={cx(styles.root, (onClick && !btnText) && styles.clickable, className)}
                   href={href}
                >
                    {this.renderContent()}
                </a>
            )
        }
        return (
            <div className={cx(styles.root, (onClick && !btnText) && styles.clickable, className)}
                 onClick={(onClick && !btnText) ? onClick : NO_OP}
            >
                {this.renderContent()}
            </div>
        )
    }
};