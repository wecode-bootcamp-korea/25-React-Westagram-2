import React, { PureComponent } from 'react';

class Nav extends PureComponent {
  render() {
    return (
      <div className="nav-wrapper">
        <nav>
          <span className="nav-left">
            <i className="fab fa-instagram"></i>
            <button>instagram</button>
          </span>

          <span className="nav-mid">
            <i className="fas fa-search"></i>
            <input placeholder="검색" />
          </span>
          <span className="nav-right">
            <img
              alt="explore"
              src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/explore.png"
            />
            <img
              alt="heart"
              src=" https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/heart.png"
            />
            <img
              alt="profile"
              src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/profile.png"
            />
            <div className="menu-user-pic">
              <img
                alt="userImagepicture"
                className="menu-profile"
                src="/images/hyunjinKim/profile.jpeg"
              />
            </div>
          </span>
        </nav>
      </div>
    );
  }
}

export default Nav;
