import React from 'react';
import PropTypes from 'prop-types';

import {articleStyles, dateDisplay} from '../utils/utils';

const Article = (props) => {
  const { article, store } = props;
  const author = store.lookupAuthor(article.authorId);
  
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

export default Article;