import React from 'react';
import { Link } from 'react-router-dom';
import Search from './Search/Search';
import Mypage from './Mypage/Mypage';
import './Navbar.scss';

class Navbar extends React.Component {
  constructor() {
    super();
    this.state = {
      isMypageOpen: false,
    };
  }

  toggleMypage = () => {
    this.setState({ isMypageOpen: !this.state.isMypageOpen });
  };

  render() {
    return (
      <nav className="nav">
        <div className="navbar">
          <div className="left">
            <span className="logo icon">
              <Link to="">
                <i className="logo-image fab fa-instagram"></i>
                <h2 className="logo-title">Westagram</h2>
              </Link>
            </span>
          </div>
          <Search />
          <div className="right">
            <span className="icon">
              <Link to="">
                <i className="far fa-compass"></i>
              </Link>
            </span>
            <span className="icon">
              <Link to="">
                <i className="far fa-heart"></i>
              </Link>
            </span>
            <button className="icon mypage-button" onClick={this.toggleMypage}>
              <img alt="내 프로필 사진" src="/images/nayoungLee/망붕배경.jpg" />
            </button>
            <Mypage isMypageOpen={this.state.isMypageOpen} />
          </div>
        </div>
      </nav>
    );
  }
}

export default Navbar;
