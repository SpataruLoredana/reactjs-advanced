import React from 'react';
import ReactDOM from 'react-dom'; // because we interfere with the browser here

const App = () => (
  <h2>Hello React..first component</h2>
);

ReactDOM.render(<App />, document.getElementById('root'));