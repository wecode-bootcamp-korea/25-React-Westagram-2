import React from 'react';
import { Link } from 'react-router-dom';
import './SearchBoxItem.scss';

class SearchBoxItem extends React.Component {
  render() {
    const { img, id, name } = this.props.item;

    return (
      <Link className="SearchBoxItem" to="">
        <img alt="검색된 계정 프로필 사진" src={`/images/nayoungLee/${img}`} />
        <div className="nametag">
          <span className="id non-hover-id">{id}</span>
          <span className="name">{name}</span>
        </div>
      </Link>
    );
  }
}

export default SearchBoxItem;
