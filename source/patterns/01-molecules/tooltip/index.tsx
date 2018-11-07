import * as React from 'react';
import cx from 'classnames';
import Portal from '../../react-utils/portal';
import Stick from '../../react-utils/stick';
import styles from './index.module.scss';

type TooltipPositionOptions =
    'top' |
    'top left' |
    'top right' |
    'bottom' |
    'bottom left' |
    'bottom right' |
    'left' |
    'left top' |
    'left bottom' |
    'right' |
    'right top' |
    'right bottom' |
    'overlay';

type Props = {
    /**
     * Defines the element which should get the tooltip
     */
    children: JSX.Element,
    /**
     * Sets the text of the tooltip
     */
    label: string,
    /**
     * Deprecated
     */
    transition?: string,
    /**
     * Additional classNames
     */
    className?: string,
    /**
     * Set the position of the tooltip
     */
    positioning?: TooltipPositionOptions,
    /**
     * Set the HTML zIndex property
     */
    zIndex?: number,
    fixed?: boolean
}

type State = {
    showing: boolean
}

export default class Tooltip extends React.Component<Props, State> {
    public readonly defaultProps = {
        transition: 'fadeIn',
        positioning: 'top'
    };

    public readonly state = {
        showing: false
    };

    private timeout;
    private _handler;

    private showTooltip() {
        this.setState({
            showing: true
        });
    }

    private hideTooltip() {
        this.setState({
            showing: false
        });
    }

    private onMouseEnter() {
        this.timeout = setTimeout(this.showTooltip.bind(this), 0);
    }

    private onMouseLeave() {
        clearTimeout(this.timeout);
        this.hideTooltip();
    }

    private renderTooltip() {
        if (this.state.showing) {
            const {label} = this.props;

            return (
                <Portal>
                    <Stick
                        element={this._handler}
                        positioning={this.props.positioning}
                        fixed={this.props.fixed}
                        zIndex={this.props.zIndex}
                        transition={this.props.transition}
                        offset={10}
                    >
                        <div className={cx(styles.tooltip, this.props.positioning && styles[this.props.positioning.split(' ')[0]])}>
                            {label}
                        </div>
                    </Stick>
                </Portal>
            );
        }
    }

    render() {
        const {className} = this.props;

        return (
            <div
                className={className || styles.root}
                onMouseEnter={this.onMouseEnter.bind(this)}
                onMouseLeave={this.onMouseLeave.bind(this)}
                ref={(c) => {
                    this._handler = c;
                }}
            >
                {this.props.children}
                {this.renderTooltip()}
            </div>
        );
    }
}
