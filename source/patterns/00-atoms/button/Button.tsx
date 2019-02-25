/* Import external packages */
import cx from "classnames";
import * as React from "react";

/* Import styles and components */
import Tooltip from "../../01-molecules/tooltip";
import Icon from "../icons/index";
import Spinner from "../spinner/index";
import styles from "./index.module.scss";

/* Declare interfaces and types */
export declare interface IButton {
  /** Display the button as block */
  block?: boolean;
  /** Content of the Button */
  children?: React.ReactNode | React.ReactNodeArray;
  /** Custom css class name */
  className?: string;
  /** Define text that should be displayed in a tooltip it is disabled */
  disabledText?: string;
  /** Adds an href to the button. The button will be rendered as <a> tag */
  href?: string;
  /** Custom html id */
  id?: string;
  /** Determines if the button is clicked or not */
  isActive?: boolean;
  /** Determines if the button is disabled */
  isDisabled: boolean;
  /** Adds an on click function to the button */
  onClick?: (e: React.MouseEvent<HTMLElement>) => any;
  /** Determines if the button should have round corners like a pill */
  rounded?: boolean;
  /** Size of the button */
  size?: "lg" | "sm" | "xs";
  /** Current state of the button */
  state: "default" | "loading" | "success" | "danger";
  /** Should the button fire on submit */
  submit?: boolean;
  /** Determines where to open a defined href */
  target?: "blank" | "top" | "self";
  /** Basic styling of the button */
  type:
    | "dark"
    | "default"
    | "primary"
    | "secondary"
    | "success"
    | "info"
    | "warning"
    | "danger"
    | "light"
    | "link"
    | "outline-primary"
    | "outline-secondary"
    | "outline-success"
    | "outline-info"
    | "outline-warning"
    | "outline-danger";
}

/**
 * Button variants and states.
 */
const SPINNER_TYPES: {
  [key in
    | "dark"
    | "default"
    | "primary"
    | "secondary"
    | "success"
    | "info"
    | "warning"
    | "danger"
    | "link"
    | "light"
    | "outline-primary"
    | "outline-secondary"
    | "outline-success"
    | "outline-info"
    | "outline-warning"
    | "outline-danger"]: string
} = {
  danger: "inverted",
  dark: "inverted",
  default: "primary",
  info: "inverted",
  light: "primary",
  link: "primary",
  "outline-danger": "danger",
  "outline-info": "info",
  "outline-primary": "primary",
  "outline-secondary": "secondary",
  "outline-success": "success",
  "outline-warning": "warning",
  primary: "inverted",
  secondary: "inverted",
  success: "inverted",
  warning: "inverted"
};

/**
 * The App-Arena Button
 */
export default class Button extends React.Component<IButton, {}> {
  public static defaultProps: IButton = {
    isDisabled: false,
    state: "default",
    type: "secondary"
  };

  private button;
  private btnWidth;
  private readonly refBind;

  constructor(props) {
    super(props);
    this.refBind = this.ref.bind(this);
  }

  public componentDidMount() {
    this.setButtonWidth(this.props.state);
  }

  public componentWillReceiveProps(nextProps) {
    if (nextProps.state !== this.props.state) {
      this.setButtonWidth(nextProps.state);
    }
  }

  public render() {
    const {
      block,
      children,
      className,
      href,
      id,
      isActive,
      isDisabled,
      onClick,
      rounded,
      size,
      state,
      submit,
      target,
      type
    } = this.props;
    // classes
    const componentClass = cx(
      styles.btn,
      styles[`btn-${type}`],
      size && styles[`btn-${size}`],
      block && styles["btn-block"],
      isActive && styles.active,
      isDisabled && styles.disabled,
      rounded && styles["btn-rounded"],
      className
    );
    const style =
      state !== "default" && this.btnWidth
        ? { width: `${this.btnWidth}px` }
        : {};

    // If a link is available, then render the button as A tag
    if (href) {
      return (
        <a
          className={componentClass}
          href={href}
          id={id}
          ref={this.refBind}
          style={style}
          target={`_${target}`}
        >
          {state === "default" ? children : this.renderState()}
        </a>
      );
    }
    if (isDisabled || state !== "default") {
      return this.renderDisabledButton(componentClass, children, style);
    }

    return (
      <button
        className={componentClass}
        id={id}
        onClick={onClick}
        ref={this.refBind}
        role="button"
        style={style}
        type={submit ? "submit" : "button"}
      >
        {state === "default" ? children : this.renderState()}
      </button>
    );
  }

  /**
   * Renders a disabled button and checks if the there should be an tooltip
   * around it or not
   * @param className Custom CSS Classname
   * @param children Content of the button
   * @param style Css styling
   * @return React.ReactNode Disabled Button with or without tooltip
   */
  private renderDisabledButton(
    className: string,
    children: React.ReactNode,
    style: any
  ): React.ReactNode {
    if (this.props.disabledText) {
      return (
        <Tooltip label={this.props.disabledText} zIndex={2000} positioning={"top"}>
          <button
            className={className}
            disabled={true}
            id={this.props.id}
            onClick={this.props.onClick}
            ref={this.refBind}
            role="button"
            style={style}
            type={this.props.submit ? "submit" : "button"}
          >
            {this.props.state === "default" ? children : this.renderState()}
          </button>
        </Tooltip>
      );
    }
    return (
      <button
        className={className}
        disabled={true}
        id={this.props.id}
        onClick={this.props.onClick}
        ref={this.refBind}
        role="button"
        style={style}
        type={this.props.submit ? "submit" : "button"}
      >
        {this.props.state === "default" ? children : this.renderState()}
      </button>
    );
  }

  private setButtonWidth(state) {
    if (state === "default" && this.button) {
      this.btnWidth = this.button.getBoundingClientRect().width;
    }
  }

  private ref(node) {
    this.button = node;
  }

  private renderState() {
    const { state, children, type } = this.props;
    switch (state) {
      case "loading":
        return <Spinner size="sm" type={SPINNER_TYPES[type]} />;
      case "success":
        return <Icon type="success" name="check" />;
      case "danger":
        return <Icon type="danger" name="close" />;
      default:
        return children;
    }
  }
}
