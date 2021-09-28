import React from 'react';
import SearchBox from './SearchBox/SearchBox';
import './Search.scss';

class Search extends React.Component {
  constructor() {
    super();
    this.state = {
      search: '',
      placeholder: '',
      searchObj: [],
      searchList: [],
      isSearchBoxOpen: false,
    };
  }

  componentDidMount() {
    fetch('http://localhost:3000/data/userData.json', {
      method: 'GET',
    })
      .then(res => res.json())
      .then(data => {
        this.setState({ searchObj: data });
      });
  }

  handleSearchInput = e => {
    this.setState({
      search: e.target.value,
      placeholder: e.target.value,
      searchList: this.state.searchObj.filter(obj =>
        obj.id.includes(e.target.value)
      ),
    });
  };

  openSearchBox = () => {
    this.setState({ search: this.state.placeholder, isSearchBoxOpen: true });
  };

  closeSearchBox = () => {
    this.setState({
      search: '',
      isSearchBoxOpen: false,
    });
  };

  render() {
    const { search, placeholder, searchList, isSearchBoxOpen } = this.state;

    return (
      <div className="center">
        <input
          className="search-bar"
          type="text"
          value={search}
          onClick={this.openSearchBox}
          onChange={this.handleSearchInput}
        />
        <div
          className={`search-bar-placeholder ${isSearchBoxOpen ? 'hide' : ''}`}
        >
          <span>
            <i className="fas fa-search"></i>
          </span>
          <span>{placeholder ? placeholder : '검색'}</span>
        </div>
        <button
          className={`search-box-close-button ${isSearchBoxOpen ? 'show' : ''}`}
          onClick={this.closeSearchBox}
        >
          <i className="fas fa-times-circle"></i>
        </button>
        <SearchBox searchList={searchList} isSearchBoxOpen={isSearchBoxOpen} />
      </div>
    );
  }
}

export default Search;
