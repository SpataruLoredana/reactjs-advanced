import React, { Component } from 'react';

import DataApi from '../DataApi';
import { data } from '../testData';
const api = new DataApi(data);

import ArticleList from './ArticleList';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      articles: api.getArticles(),
      authors: api.getAuthors(),
    };
  }

  render() {
    return (
      <div>
        <ArticleList 
          articles={this.state.articles}
          authors={this.state.authors}
        />
      </div>
    );
  }
}

export default App;