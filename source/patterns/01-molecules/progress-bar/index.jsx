import React from 'react';
import PropTypes from 'prop-types';
import ReactComponent from '../../react-utils/component/index';
import cx from 'classnames';
import styles from './index.scss';

const PROGRESS_TYPES = [
    'success',
    'info',
    'warning',
    'danger'
];

const RADIUS = 54;
const CIRCUMFERENCE = 2 * Math.PI * RADIUS;


export default class ProgressBar extends ReactComponent {
    static propTypes = {
        /**
         * Additional classNames
         */
        classNames: PropTypes.string,
        /**
         * The current progress
         */
        value: PropTypes.number.isRequired,
        /**
         * Display the progress bar striped instead of solid?
         */
        striped: PropTypes.bool,
        /**
         * Display the progress bar as a circle instead?
         */
        circle: PropTypes.bool,
        /**
         * Animate the stripes?
         */
        animated: PropTypes.bool,
        /**
         * The maximum possible value for the 'value' prop
         */
        maxValue: PropTypes.number.isRequired,
        /**
         * Deprecated
         */
        minWidth: PropTypes.number.isRequired,
        /**
         * A text that can be displayed above the progress bar
         */
        text: PropTypes.string,
        /**
         * Set the type and color scheme of the progress bar
         */
        type: PropTypes.oneOf(PROGRESS_TYPES).isRequired,
        /**
         * Set the HTML ID of the text prop
         */
        captionID: PropTypes.string
    };

    static defaultProps = {
        classNames: '',
        text: '',
        captionID: 'progress-bar-caption',
        circle: false
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
        if (this.props.circle) {
            const classNames = cx(
                styles[`progress-circle`],
                styles[`progress-circle-${this.props.type}`],
                (this.props.striped) && styles[`progress-circle-striped`],
                (this.props.animated) && styles[`progress-circle-animated`],
                this.props.classNames
            );
            const progress = this.props.value / 100;
            const dashoffset = CIRCUMFERENCE * (1 - progress);
            const style = {
                strokeDashoffset: dashoffset,
                strokeDasharray: CIRCUMFERENCE
            };
            return (
                <div>
                    {this.renderRemovableText(this.props.text)}
                    <svg className={classNames} width="100%" viewBox="0 0 120 120">
                        <circle className={styles.progressMeter} cx="60" cy="60" r="54" strokeWidth="6"/>
                        <circle className={styles.progressValue} cx="60" cy="60" r="54" strokeWidth="6" style={style}/>
                    </svg>
                </div>
            );
        }

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
