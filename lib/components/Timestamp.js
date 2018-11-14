import React, { Component } from 'react';

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

export default Timestamp;