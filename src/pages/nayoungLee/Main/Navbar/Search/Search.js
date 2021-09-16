import React from 'react';
import SearchBox from './SearchBox/SearchBox';
import './Search.scss';

class Search extends React.Component {
  render() {
    return (
      <div className="navbar-center">
        <input className="search-bar" type="text" />
        <div className="search-bar-placeholder">
          <span>
            <i className="fas fa-search"></i>
          </span>
          <span>검색</span>
        </div>
        <button className="search-box-close-button">
          <i className="fas fa-times-circle"></i>
        </button>
        <SearchBox />
      </div>
    );
  }
}

export default Search;
