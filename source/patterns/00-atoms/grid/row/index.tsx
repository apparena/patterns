import * as React from 'react';
import cx from 'classnames';
import styles from '../grid.module.scss';

interface RowProps {
    children: React.ReactChild,
    className?: string,
    justifyContent?: 'start' | 'center' | 'end' | 'around' | 'between',
    alignItems?: 'start' | 'center' | 'end'
}

export default class Row extends React.Component<RowProps, {}>{
    constructor(props) {
        super(props);
        this.state= {}
    }

    render() {
        const { children } = this.props;
        const child = React.Children.map(children, (child) => {
            if (React.isValidElement(child)) {
                return React.cloneElement(child, child.props);
            }
        });

        // classes
        const componentClass = cx(
            styles['row'],
            this.props.justifyContent && styles[`justify-content-${this.props.justifyContent}`],
            this.props.alignItems && styles[`align-items-${this.props.alignItems}`],

            this.props.className,
        );

        return (
            <div className={componentClass}>
                {child}
            </div>
        );
    }
}
