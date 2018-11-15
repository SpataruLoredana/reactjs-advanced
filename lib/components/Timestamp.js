import React, { Component } from 'react';
import StoreProvider from './StoreProvider';

class Timestamp extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        {this.props.timestamp.toString()}
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