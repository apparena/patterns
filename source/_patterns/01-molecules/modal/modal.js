import React, {PropTypes} from "react";
import ReactComponent from "../../react-utils/component";
import cx from "classnames";
import styles from "./modal.scss";
import Input from "../../00-atoms/forms/input";

export default class Modal extends ReactComponent {
    static propTypes = {
        classNames: PropTypes.string,
        size: PropTypes.oneOf(['lg', 'sm', 'xs', 'xl']).isRequired,
        headerText: PropTypes.string.isRequired,
        linkLocation: PropTypes.string,
        linkText: PropTypes.string,
        searchPlaceholder: PropTypes.string,
        onSearch: PropTypes.func,
        onSave: PropTypes.func,
        hintText: PropTypes.string,
        saveText: PropTypes.string,
        onClose: PropTypes.func,
        closeText: PropTypes.string,
        children: PropTypes.node.isRequired,
    };

    static defaultProps = {
        saveText: "Save",
        closeText: "Cancel",
        visible: true,
        searchPlaceholder: " ",
    };

    getInitState() {
        return {
            searchQuery: "",
        };
    }

    render() {
        return (
            <div>
                <div
                    className={cx(styles.modal, styles['modal-' + this.props.size], (this.props.visible) ? styles.visible : styles.invisible, this.props.classNames)}
                >
                    <header className={styles['modal-header']}>
                        <h2 className={styles['modal-header-cell']}>{this.props.headerText}</h2>
                        {(this.props.linkLocation && this.props.linkText && this.props.size !== 'small') &&
                        <a href={this.props.linkLocation}
                           className={styles['modal-header-link']}>{this.props.linkText}</a>
                        }

                        {(this.props.onSearch !== undefined) &&
                        <Input placeholder={this.props.searchPlaceholder} inputClass={styles['modal-header-input']}
                               inputValue={this.state.searchQuery} onFilterInput={this.props.onSearch}/>
                        }
                        <span className={styles['modal-header-close-button']} onClick={this.props.onClose}>
                            <span className="fa fa-times"/>
                        </span>
                    </header>
                    <div className={cx(styles['modal-content'], styles['modal-content-' + this.props.size])}>
                        {this.props.children}
                    </div>
                    <footer className={styles['modal-footer']}>
                        <div className={styles['modal-footer-actions']}>
                            {(this.props.onSave && this.props.saveText) &&
                            <button className={styles['modal-button-primary']}
                                    onClick={this.props.onSave}>{this.props.saveText}</button>
                            }
                            <button className={styles['modal-button-close']}
                                    onClick={this.props.onClose}>{this.props.closeText}</button>
                        </div>
                        {(this.props.hintText) &&
                        <div className={styles['modal-footer-hint']}>{this.props.hintText}</div>
                        }
                    </footer>
                </div>
                <div
                    className={cx(styles['modal-shadow-bg'], (this.props.visible) ? styles.visible : styles.invisible)}
                />
            </div>
        );
    }
};