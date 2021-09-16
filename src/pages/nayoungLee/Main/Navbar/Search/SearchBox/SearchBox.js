import React from 'react';
import { Link } from 'react-router-dom';
import './SearchBox.scss';

class SearchBox extends React.Component {
  render() {
    return (
      <div className="SearchBox">
        <div className="search-box-peak"></div>
        <div className="search-box-list">
          <Link className="search-box-item" to="">
            <img
              alt="검색된 계정 프로필 사진"
              src="/images/nayoungLee/망붕배경.jpg"
            />
            <div className="nametag">
              <span className="id non-hover-id">nylee9621</span>
              <span className="name">이나영</span>
            </div>
          </Link>
        </div>
      </div>
    );
  }
}

export default SearchBox;
