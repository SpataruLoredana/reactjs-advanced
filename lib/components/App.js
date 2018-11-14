import React, { Component } from 'react';
import ArticleList from './ArticleList';

class App extends Component {
  state = this.props.store.getState();
  
  render() {
    return (
      <div>
        <ArticleList 
          articles={this.state.articles}
          store={this.props.store}
        />
      </div>
    );
  }
}

export default App;