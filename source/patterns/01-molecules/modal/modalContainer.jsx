import React from 'react';
import PropTypes from 'prop-types';
import ReactComponent from '../../react-utils/component/index';

export default class OverlaysContainer extends ReactComponent {
  render() {
    return (
      <div>
        {this.props.modals.map(this.renderOverlay, this)}
      </div>
    );
  }

  renderOverlay(overlay, key) {
    return React.cloneElement(overlay.component, { key });
  }
}

OverlaysContainer.propTypes = {
  modals: PropTypes.array.isRequired,
};
