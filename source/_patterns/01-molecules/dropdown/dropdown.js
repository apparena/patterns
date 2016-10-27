import React, {PropTypes} from "react";
import ReactComponent from "../../react-utils/component";
import cx from "classnames";
import Button from "../../00-atoms/button/button";
import styles from "./dropdown.scss";

const ESC_KEYCODE = 27;
const NO_OP = () => undefined;

export default class Dropdown extends ReactComponent {
    static propTypes = {
        align: PropTypes.oneOf(["left", "right"]),
        buttonLabel: PropTypes.string,
        buttonSize: PropTypes.string,
        buttonType: PropTypes.string,
        children: PropTypes.node,
        className: PropTypes.string,
        isOpen: PropTypes.bool,
        items: PropTypes.node.isRequired,
        onSelect: PropTypes.func,
    };

    static defaultProps = {
        onSelect: NO_OP,
    };

    getInitState() {
        return {
            isOpen: this.props.isOpen || false,
        };
    }

    componentWillUpdate(nextProps, nextState) {
        if (typeof window === 'undefined') return;
        if (nextState.isOpen) {
            window.addEventListener('keydown', ::this.handleKeyDown);
        } else {
            window.removeEventListener('keydown', ::this.handleKeyDown);
        }
    }

    openDropdown() {
        this.setState({isOpen: true});
    }

    closeDropdown() {
        this.setState({isOpen: false});
    }

    handleKeyDown(e) {
        if (e.keyCode === ESC_KEYCODE) {
            this.closeDropdown();
        }
    }

    renderChildren() {
        return React.Children.map(this.props.children, (child) => {
            return React.cloneElement(child, {
                onClick: this.state.isOpen ? ::this.closeDropdown : ::this.openDropdown,
                className: cx(child.props.className, styles["dropdown-toggle"]),
            });
        });
    }

    renderButton() {
        const {buttonType, buttonSize, buttonLabel} = this.props;
        return (
            <Button type={buttonType}
                    size={buttonSize}
                    onClick={this.state.isOpen ? ::this.closeDropdown : ::this.openDropdown}
                    className={styles["dropdown-toggle"]}
            >
                {buttonLabel}
            </Button>
        );
    }

    onClick(selectedItem) {
        this.setState({
            isOpen: !this.state.isOpen,
        });
        this.props.onSelect(selectedItem);
    }

    renderDropdownMenu() {
        if (!this.state.isOpen) return null;
        return (
            <ul key="Dropdown-menu" className={styles["dropdown-menu"]} role="menu">
                {React.Children.map(this.props.items, (child, index) => {
                    if (React.isValidElement(child)) {
                        return (
                            <li key={'item-' + index} className={styles["dropdown-item"]}
                                onClick={this.onClick.bind(this, child.props.value)}>
                                {React.cloneElement(child, {...child.props})}
                            </li>
                        )
                    }
                })}
            </ul>
        );
    }

    renderDropdownMenuBackground() {
        if (!this.state.isOpen) return null;
        return <div className={styles["dropdown-backdrop"]} onClick={::this.closeDropdown}/>;
    }

    render() {
        // classes
        var componentClass = cx(styles["dropdown"],
            this.state.isOpen && styles["open"],
            this.props.align && styles["dropdown-menu-" + this.props.align],
            this.props.className
        );

        return (
            <span className={componentClass}>
				{React.Children.count(this.props.children) ? this.renderChildren() : this.renderButton()}
                {this.renderDropdownMenu()}
                {this.renderDropdownMenuBackground()}
			</span>
        );
    }
}