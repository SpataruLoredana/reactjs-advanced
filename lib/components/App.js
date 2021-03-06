import React, { Component } from 'react';
import PropTypes from 'prop-types';
import pickBy from 'lodash.pickby';

import ArticleList from './ArticleList';
import SearchBar from './SearchBar';
import Timestamp from './Timestamp';

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

  // subscribe only to partial state of the store
  appState = () => {
    const { articles, searchTerm } = this.props.store.getState();
    return { articles, searchTerm};
  }

  state = this.appState();

  onStoreChange = () => {
    this.setState(this.appState());
  }

  // update when the store state changes - subscribe 
  // (provide a callback to the store for when state changes )
  componentDidMount() {
    this.subscriptionId = this.props.store.subscribe(this.onStoreChange);
    this.props.store.startClock();
  }

  componentWillUnmount() {
    this.props.store.unsubscribe(this.subscriptionId);
  }

  render() {
    let { articles, searchTerm } = this.state;
    if(searchTerm) {
      // make search term case insensitive
      const searchRegEx = new RegExp(searchTerm, 'i');

      // eslint-disable-next-line no-unused-vars
      articles = pickBy(articles, (value, key) => {
        return value.title.match(searchRegEx)
          || value.body.match(searchRegEx);
      });
    }
    return (
      <div>
        <Timestamp />
        <SearchBar />
        <ArticleList 
          articles={articles}
        />
      </div>
    );
  }
}

export default App;