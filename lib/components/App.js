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

  articleActions = {
    lookupAuthor: (authorId) => this.state.authors[authorId]
  };

  render() {
    return (
      <div>
        <ArticleList 
          articles={this.state.articles}
          articleActions={this.articleActions}
        />
      </div>
    );
  }
}

export default App;