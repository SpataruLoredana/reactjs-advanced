// jest snapshot testing
import React from 'react';
import ArticleList from '../ArticleList';

// import renderer from 'react-test-renderer'; // create react components snapshots
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

describe('ArticleList', () => {
  const testProps = {
    articles: {
      a: { id: 'a'},
      b: { id: 'b'},
    }, 
  };

  it('renders correctly', () => {
    const wrapper = shallow(
      <ArticleList
        {...testProps}
      />
    );
    
    expect(wrapper).toMatchSnapshot(); // compare every test with first snapshot created
    expect(wrapper.find('ArticleContainer').length).toBe(2);
  });
});