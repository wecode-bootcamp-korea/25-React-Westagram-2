import React from 'react';
import { Link } from 'react-router-dom';
import Search from './Search/Search';
import Mypage from './Mypage/Mypage';
import './Navbar.scss';

class Navbar extends React.Component {
  render() {
    return (
      <nav>
        <div className="navbar">
          <div className="navbar-left">
            <span className="navbar-logo navbar-icon">
              <Link to="">
                <i className="navbar-logo-image fab fa-instagram"></i>
                <h2 className="navbar-logo-title">Westagram</h2>
              </Link>
            </span>
          </div>
          <Search />
          <div className="navbar-right">
            <span className="navbar-icon">
              <Link to="">
                <i className="far fa-compass"></i>
              </Link>
            </span>
            <span className="navbar-icon">
              <Link to="">
                <i className="far fa-heart"></i>
              </Link>
            </span>
            <button className="navbar-icon mypage-button">
              <img alt="내 프로필 사진" src="/images/nayoungLee/망붕배경.jpg" />
            </button>
            <Mypage />
          </div>
        </div>
      </nav>
    );
  }
}

export default Navbar;
