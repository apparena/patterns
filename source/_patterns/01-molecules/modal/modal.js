import React, {PropTypes} from "react";
import ReactComponent from "../../react-utils/component";
import cx from "classnames";
import styles from "./modal.scss";
import Input from "../../00-atoms/forms/input";
import _ from "lodash";

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
        closeText: PropTypes.string,
        children: PropTypes.node.isRequired,
    };

    static defaultProps = {
        saveText: "Save",
        closeText: "Cancel",
        searchPlaceholder: " ",
    };


    getInitState() {
        return {
            searchQuery: "",
            visible: this.props.visible,
        };
    }

    handleChange(event) {
        this.setState({searchQuery: event.target.value});
        this._search(event.target.value);
    }

    componentWillMount() {
        if (this.props.onSearch !== undefined) this._search = _.debounce(this.props.onSearch, 400);
        else this._search = {};
    }

    handleClose() {
        this.setState({visible: false});
    }

    componentWillReceiveProps(nextProps, nextContext) {
        this.setState({visible: nextProps.visible});
    }

    render() {
        return (
            <div>
                <div
                    className={cx(styles.modal, styles['modal-' + this.props.size], (this.state.visible) ? styles.visible : styles.invisible, this.props.classNames)}
                >
                    <header className={styles['modal-header']}>
                        <h2 className={styles['modal-header-cell']}>{this.props.headerText}</h2>
                        {(this.props.linkLocation && this.props.linkText && this.props.size !== 'small') &&
                        <a href={this.props.linkLocation}
                           className={styles['modal-header-link']}>{this.props.linkText}</a>
                        }

                        {(this.props.onSearch !== undefined) &&
                        <Input placeholder={this.props.searchPlaceholder} inputClass={styles['modal-header-input']}
                               inputValue={this.state.searchQuery} onFilterInput={::this.handleChange}/>
                        }
                        <span className={styles['modal-header-close-button']} onClick={::this.handleClose}>
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
                                    onClick={::this.props.onSave}>{this.props.saveText}</button>
                            }
                            <button className={styles['modal-button-close']}
                                    onClick={::this.handleClose}>{this.props.closeText}</button>
                        </div>
                        {(this.props.hintText) &&
                        <div className={styles['modal-footer-hint']}>{this.props.hintText}</div>
                        }
                    </footer>
                </div>
                <div
                    className={cx(styles['modal-shadow-bg'], (this.state.visible) ? styles.visible : styles.invisible)}
                />
            </div>
        );
    }
};