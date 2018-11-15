import React, { PureComponent } from 'react';
import debounce from 'lodash.debounce';
import StoreProvider from './StoreProvider';

class SearchBar extends PureComponent {
  state = {
    searchTerm: ''
  }

  doSearch = debounce(() => {
    this.props.store.setSearchTerm(this.state.searchTerm); 
  }, 300);

  handleSearch = (e) => {
    this.setState({
      searchTerm: e.target.value
    }, () => {
      // callback that fires after state is updated
      this.doSearch();
    });
  }

  render() {
    return (
      <input
        value={this.state.searchTerm}
        type="search"
        placeholder="Type your search term..."
        onChange={this.handleSearch}
      />
    );
  }
}

export default StoreProvider()(SearchBar);