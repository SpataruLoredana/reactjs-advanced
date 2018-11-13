import React, {Component} from 'react';
import ReactDOM from 'react-dom'; // because we interfere with the browser here

class App extends Component {
  state = {
    answer: 1000
  };
  render() {
    return (
      <h2>Class Component...{this.state.answer}</h2>
    );
  }
}

export default App;

ReactDOM.render(<App />, document.getElementById('root'));