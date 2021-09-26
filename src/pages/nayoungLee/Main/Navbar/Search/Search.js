import React from 'react';
import SearchBox from './SearchBox/SearchBox';
import './Search.scss';

class Search extends React.Component {
  searchObj = [
    {
      img: '망붕배경.jpg',
      id: 'goodmin0973',
      name: '이재원',
    },
    {
      img: '망붕배경.jpg',
      id: 'goodjung0973',
      name: '이재원',
    },
    {
      img: '망붕배경.jpg',
      id: 'kimjis1004',
      name: '김지선',
    },
    {
      img: '망붕배경.jpg',
      id: 'kimjis314',
      name: '김지선',
    },
    {
      img: '망붕배경.jpg',
      id: 'cjswotls1234',
      name: '정영민',
    },
  ];

  constructor() {
    super();
    this.state = {
      search: '',
      placeholder: '',
      searchList: [],
      isSearchBoxOpen: false,
    };
  }

  handleSearchInput = e => {
    this.setState({
      search: e.target.value,
      placeholder: e.target.value,
      searchList: this.searchObj.filter(obj => obj.id.includes(e.target.value)),
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
      <div className="navbar-center">
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
