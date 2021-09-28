import React from 'react';
import SearchBoxItem from './SearchBoxItem/SearchBoxItem';
import './SearchBox.scss';

class SearchBox extends React.Component {
  render() {
    const { searchList, isSearchBoxOpen } = this.props;

    return (
      <div className={`SearchBox ${isSearchBoxOpen ? 'show' : ''}`}>
        <div className="peak"></div>
        <div className="list">
          {searchList.map((item, idx) => (
            <SearchBoxItem key={idx} item={item} />
          ))}
        </div>
      </div>
    );
  }
}

export default SearchBox;
