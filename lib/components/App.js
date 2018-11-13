import React, { Component } from 'react';
import axios from 'axios';

import DataApi from '../DataApi';
import ArticleList from './ArticleList';

class App extends Component {
  state = {
    articles: {},
    authors: {}
  };

  async componentDidMount() {
    // fetch data from the api
    const response = await axios.get('/data');
    const api = new DataApi(response.data);

    this.setState(() => {
      return {
        articles: api.getArticles(),
        authors: api.getAuthors()
      };
    });
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