import React from 'react';
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

export default Article;