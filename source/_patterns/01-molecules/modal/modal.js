import React, {PropTypes} from "react";
import ReactComponent from "../../react-utils/component";
import cx from "classnames";
import styles from "./modal.scss";
import Input from "../../00-atoms/forms/input";
import Icon from "../../00-atoms/icons/icons";
import Button from "../../00-atoms/button/button";

export default class Modal extends ReactComponent {
    static propTypes = {
        classNames: PropTypes.string,
        size: PropTypes.oneOf(["lg", "sm", "xs", "xl"]),
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
        visible: PropTypes.bool,
        children: PropTypes.node.isRequired,
    };

    static defaultProps = {
        saveText: "Save",
        closeText: "Cancel",
        visible: true,
        searchPlaceholder: " ",
        size: "sm",
    };

    getInitState() {
        return {
            searchQuery: "",
        };
    }

    componentDidMount() {
        if (this.props.visible) {
            document.body.classList.add(styles["modal-open"]);
        }
    }

    componentWillUnmount() {
        document.body.classList.remove(styles["modal-open"]);
    }

    componentWillReceiveProps(nextProps) {
        if (!this.props.visible && nextProps.visible) {
            document.body.classList.add(styles["modal-open"]);
        } else if (this.props.visible && !nextProps.visible) {
            document.body.classList.remove(styles["modal-open"]);
        }
    }

    render() {
        return (
            <div>
                <div
                    className={cx(styles.modal, (this.props.visible) && styles.show, this.props.classNames)}
                >
                    <div className={cx(styles["modal-dialog"], styles["modal-" + this.props.size])}>
                        <div className={cx(styles["modal-content"], styles["modal-content-" + this.props.size])}>
                            <div className={styles["modal-header"]}>
                                <button type="button" className={styles.close} onClick={this.props.onClose}>
                                    <Icon name="times"/>
                                </button>
                                <h4 className={styles["modal-title"]}>{this.props.headerText}</h4>
                                {(this.props.linkLocation && this.props.linkText && this.props.size !== "small") &&
                                <a
                                    href={this.props.linkLocation}
                                    className={styles["modal-header-link"]}
                                >
                                    {this.props.linkText}
                                </a>
                                }
                                {(this.props.onSearch !== undefined) &&
                                <Input
                                    placeholder={this.props.searchPlaceholder}
                                    inputClass={styles["modal-header-input"]}
                                    inputValue={this.state.searchQuery}
                                    onFilterInput={this.props.onSearch}
                                />
                                }
                            </div>
                            <div className={styles["modal-body"]}>
                                {this.props.children}
                            </div>
                            <div className={styles["modal-footer"]}>
                                {(this.props.onSave && this.props.saveText) &&
                                <Button
                                    type="primary"
                                    onClick={this.props.onSave}
                                >
                                    {this.props.saveText}
                                </Button>
                                }
                                {(this.props.onClose && this.props.closeText) &&
                                <Button
                                    type="link"
                                    onClick={this.props.onClose}
                                >
                                    {this.props.closeText}
                                </Button>
                                }
                            </div>
                            {(this.props.hintText) &&
                            <div className={styles["modal-footer-hint"]}>{this.props.hintText}</div>
                            }
                        </div>
                    </div>
                </div>
                <div className={cx(this.props.visible && styles["modal-backdrop"])}></div>
            </div>
        );
    }
};