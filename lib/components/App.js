import React, { Component } from 'react';
import ArticleList from './ArticleList';

class App extends Component {
  state = {
    articles: this.props.initialData.articles,
    authors: this.props.initialData.authors
  };
  
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