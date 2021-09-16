import React from 'react';
import { Link } from 'react-router-dom';
import Recommend from './Recommend/Recommend';
import './Aside.scss';

class Aside extends React.Component {
  render() {
    return (
      <aside className="Aside">
        <div className="me-profile">
          <Link to="">
            <img
              className="profile-image"
              alt="내 프로필 사진"
              src="/images/nayoungLee/망붕배경.jpg"
            />
          </Link>
          <div className="me-nametag nametag">
            <span>
              <Link className="id non-hover-id" to="">
                nylee9621
              </Link>
            </span>
            <span className="name">이나영</span>
          </div>
          <button className="me-change-button">전환</button>
        </div>
        <Recommend />
        <footer>
          <ul>
            <li>
              <Link to="">소개</Link>
            </li>
            <li>
              <Link to="">도움말</Link>
            </li>
            <li>
              <Link to="">홍보 센터</Link>
            </li>
            <li>
              <Link to="">API</Link>
            </li>
            <li>
              <Link to="">채용 정보</Link>
            </li>
            <li>
              <Link to="">개인정보처리방침</Link>
            </li>
            <li>
              <Link to="">약관</Link>
            </li>
            <li>
              <Link to="">위치</Link>
            </li>
            <li>
              <Link to="">인기 계정</Link>
            </li>
            <li>
              <Link to="">해시태그</Link>
            </li>
            <li>
              <Link to="">언어</Link>
            </li>
          </ul>
          <span>© 2021 Westagram from Wecode</span>
        </footer>
      </aside>
    );
  }
}

export default Aside;
