import React, {PropTypes} from "react";
import ReactComponent from "../../react-utils/component";
import cx from "classnames";
import styles from "./progress-bar.scss";

const PROGRESS_TYPES = [
    "success",
    "info",
    "warning",
    "danger"
];

export default class ProgressBar extends ReactComponent {
    static propTypes = {
        classNames: PropTypes.string,
        value: PropTypes.number.isRequired,
        striped: PropTypes.bool,
        animated: PropTypes.bool,
        maxValue: PropTypes.number.isRequired,
        minWidth: PropTypes.number.isRequired,
        text: PropTypes.string,
        type: PropTypes.oneOf(PROGRESS_TYPES).isRequired,
        captionID: PropTypes.string,
    };

    static defaultProps = {
        classNames: "",
        text: "",
        captionID: "progress-bar-caption",
    };

    renderRemovableText(text) {
        if (text !== '') {
            return (
                <div className={styles.removableText} id={this.props.captionID}>
                    <small>{text}</small>
                </div>
            );
        }
        return null;
    }

    render() {
        const classNames = cx(
            styles[`progress-bar`],
            styles[`progress-bar-${this.props.type}`],
            (this.props.striped) && styles[`progress-bar-striped`],
            (this.props.animated) && styles[`progress-bar-animated`],
            this.props.classNames
        );
        const style = {
            width: `${(this.props.value / this.props.maxValue).toFixed(1) * 100}%`
        };
        return (
            <div>
                {this.renderRemovableText(this.props.text)}
                <div className={styles.progress}>
                    <div
                        className={classNames}
                        role="progressbar"
                        style={style}
                    />
                </div>
            </div>
        );
    }
}
