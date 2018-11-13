// jest snapshot testing
import React from 'react';
import ArticleList from '../ArticleList';

import renderer from 'react-test-renderer'; // create react components snapshots

describe('ArticleList', () => {
  const testProps = {
    articles: {
      a: { id: 'a'},
      b: { id: 'b'},
    },
    articleActions: {
      // jest mock function, returns empty object
      lookupAuthor: jest.fn(() => ({}))
    }
  };
  it('renders correctly', () => {
    const tree = renderer.create(
      <ArticleList
        {...testProps}
      />
    ).toJSON();

    expect(tree).toMatchSnapshot(); // compare every test with first snapshot created
    expect(tree.children.length).toBe(2);
  });
});