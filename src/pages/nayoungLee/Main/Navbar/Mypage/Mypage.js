import React from 'react';
import { Link } from 'react-router-dom';
import './Mypage.scss';

class Mypage extends React.Component {
  render() {
    const { isMypageOpen } = this.props;

    return (
      <div className={`Mypage ${isMypageOpen ? 'show' : ''}`}>
        <div className="peak"></div>
        <div className="box">
          <Link to="" className="item">
            <i className="far fa-user-circle" />
            프로필
          </Link>
          <Link to="" className="item">
            <i className="far fa-bookmark" />
            저장됨
          </Link>
          <Link to="" className="item">
            <i className="fas fa-cog" />
            설정
          </Link>
          <div className="item">
            <i className="fas fa-sync-alt" />
            계정 전환
          </div>
          <Link to="/LoginLee" className="item">
            로그아웃
          </Link>
        </div>
      </div>
    );
  }
}

export default Mypage;
