import React from 'react';
import { Link } from 'react-router-dom';
import './Mypage.scss';

class Mypage extends React.Component {
  render() {
    const { isMypageOpen } = this.props;

    return (
      <div className={`Mypage ${isMypageOpen ? 'show' : ''}`}>
        <div className="mypage-box-peak"></div>
        <div className="mypage-box-list">
          <Link to="" className="mypage-box-item">
            <i className="far fa-user-circle"></i>프로필
          </Link>
          <Link to="" className="mypage-box-item">
            <i className="far fa-bookmark"></i>저장됨
          </Link>
          <Link to="" className="mypage-box-item">
            <i className="fas fa-cog"></i>설정
          </Link>
          <div className="mypage-box-item">
            <i className="fas fa-sync-alt"></i>계정 전환
          </div>
          <Link to="/LoginLee" className="mypage-box-item">
            로그아웃
          </Link>
        </div>
      </div>
    );
  }
}

export default Mypage;
