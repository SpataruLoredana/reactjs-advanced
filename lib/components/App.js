import React, { Component } from 'react';
import ArticleList from './ArticleList';
import PropTypes from 'prop-types';

class App extends Component {
  // working with the context API
  static childContextTypes = {
    store: PropTypes.object
  };
  getChildContext() {
    return {
      store: this.props.store
    };
  }

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