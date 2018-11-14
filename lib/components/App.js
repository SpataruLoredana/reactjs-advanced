import React, { Component } from 'react';
import PropTypes from 'prop-types';
import pickBy from 'lodash.pickby';

import ArticleList from './ArticleList';
import SearchBar from './SearchBar';

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
  
  setSearchTerm = (searchTerm) => {
    this.setState({
      searchTerm
    });
  };

  render() {
    let { articles, searchTerm } = this.state;
    if(searchTerm) {
      // eslint-disable-next-line no-unused-vars
      articles = pickBy(articles, (value, key) => {
        return value.title.match(searchTerm)
          || value.body.match(searchTerm);
      });
    }
    return (
      <div>
        <SearchBar doSearch={this.setSearchTerm} />
        <ArticleList 
          articles={articles}
          store={this.props.store}
        />
      </div>
    );
  }
}

export default App;