import React from 'react';
import StoreProvider from './StoreProvider';
import PropTypes from 'prop-types';

import {articleStyles, dateDisplay} from '../utils/utils';

const Article = (props) => {
  const { article, author } = props;
  return (
    <div style={articleStyles.article}>
      <div style={articleStyles.title}>{article.title}</div>
      <div style={articleStyles.date}>
        {dateDisplay(article.date)}
      </div>
      <div style={articleStyles.author}>
        <a href={author.website}>
          {author.firstName} {author.lastName}
        </a>
      </div>
      <div style={articleStyles.body}>{article.body}</div>
    </div>
  );
};

Article.propTypes = {
  article: PropTypes.shape({
    title: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired
  })
};

// pass extra props to the StoreProvider
function extraProps(store, originalProps) {
  return {
    author: store.lookupAuthor(originalProps.article.authorId),
  };
}

export default StoreProvider(extraProps)(Article);