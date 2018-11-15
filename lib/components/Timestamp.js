import React, { PureComponent } from 'react';
import StoreProvider from './StoreProvider';

class Timestamp extends PureComponent {

  timeDisplay = (timestamp) => 
    timestamp.toLocaleTimeString([], {hour: '2-digit', minute: '2-digit'});

  shouldComponentUpdate(nextProps) {
    const currTime = this.timeDisplay(this.props.timestamp);
    const nextTime = this.timeDisplay(nextProps.timestamp);
    return currTime !== nextTime;
  }

  render() {
    return (
      <div>
        {this.props.timestamp.toLocaleTimeString([], {hour: '2-digit', minute: '2-digit'})}
      </div>
    );
  }
}

function extraProps(store) {
  return {
    timestamp: store.getState().timestamp
  };
}

export default StoreProvider(extraProps)(Timestamp);