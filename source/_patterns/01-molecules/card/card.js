import React from 'react';
import PropTypes from 'prop-types';
import ReactComponent from '../../react-utils/component';
import cx from 'classnames';
import styles from './card.scss';

const CARD_TYPES = [
    'default',
    'primary',
    'success',
    'info',
    'warning',
    'danger',
    'outline-primary',
    'outline-secondary',
    'outline-success',
    'outline-info',
    'outline-warning',
    'outline-danger'
];

export default class Card extends ReactComponent {
    static propTypes = {
        children: PropTypes.oneOfType([
            PropTypes.element,
            PropTypes.arrayOf(PropTypes.element)
        ]).isRequired,
        type: PropTypes.oneOf(CARD_TYPES),
        inverse: PropTypes.bool
    };

    static defaultProps = {
        type: 'default'
    };

    render() {
        // classes
        const componentClass = cx(
            styles.card,
            styles[`card-${this.props.type}`],
            this.props.inverse && styles['card-inverse'],
            this.props.className
        );

        return (
            <div className={componentClass}>
                {React.Children.map(this.props.children, (child) => {
                    if (React.isValidElement(child)) {
                        const {type, className, ...props} = child.props;
                        let newClassName = "";
                        switch (type) {
                            case 'card-block':
                            case 'card-body':
                                newClassName = cx(styles['card-body'], className);
                                return React.cloneElement(child, {...props, className: newClassName});
                            case 'card-header':
                            case 'card-footer':
                                newClassName = cx(styles[type], className);
                                return React.cloneElement(child, {...props, className: newClassName});
                            default:
                                return React.cloneElement(child, {...props});
                        }
                    }
                })}
            </div>
        );
    }
}