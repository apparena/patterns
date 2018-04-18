import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import styles from './index.scss';

function Index({className, children, addon, addonPosition, id, ...props}) {
    props.className = cx(styles['input-group'], className);

    if (addonPosition === 'left') {
        return (
            <div {...props} >
                <span className={styles['input-group-addon']} id={id}>{addon}</span>
                {children}
            </div>
        );
    } else if (addonPosition === 'right') {
        return (
            <div {...props} >
                {children}
                <span className={styles['input-group-addon']} id={id}>{addon}</span>
            </div>
        );
    }
}

const ADDON_POSITIONS = [
    'left',
    'right'
];

Index.propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
    addon: PropTypes.node,
    addonPosition: PropTypes.oneOf(ADDON_POSITIONS),
    id: PropTypes.string
};

Index.defaultProps = {
    addonPosition: 'left'
};

export default Index;