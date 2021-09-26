import React from 'react';
import { Link } from 'react-router-dom';
import './SearchBoxItem.scss';

class SearchBoxItem extends React.Component {
  render() {
    return (
      <Link className="SearchBoxItem" to="">
        <img
          alt="검색된 계정 프로필 사진"
          src={`/images/nayoungLee/${this.props.item.img}`}
        />
        <div className="nametag">
          <span className="id non-hover-id">{this.props.item.id}</span>
          <span className="name">{this.props.item.name}</span>
        </div>
      </Link>
    );
  }
}

export default SearchBoxItem;
