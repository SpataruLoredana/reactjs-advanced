import React, { PureComponent } from 'react';
import StoreProvider from './StoreProvider';

class Timestamp extends PureComponent {

  static timeDisplay = (timestamp) => 
    timestamp.toLocaleTimeString([], {hour12: true, hour: '2-digit', minute: '2-digit'});

  render() {
    return (
      <div>
        {this.props.timestampDisplay}
      </div>
    );
  }
}

function extraProps(store) {
  return {
    timestampDisplay: Timestamp.timeDisplay(store.getState().timestamp),
  };
}

export default StoreProvider(extraProps)(Timestamp);