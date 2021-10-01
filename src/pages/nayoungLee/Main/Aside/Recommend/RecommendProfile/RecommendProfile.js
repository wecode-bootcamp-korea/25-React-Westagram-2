import React from 'react';
import { Link } from 'react-router-dom';
import './RecommendProfile.scss';

class RecommendProfile extends React.Component {
  render() {
    return (
      <div className="RecommendProfile">
        <Link to="">
          <img
            className="profile-image"
            alt="피추천자 프로필 사진"
            src="/images/nayoungLee/망붕배경.jpg"
          />
        </Link>
        <div className="nametag">
          <span>
            <Link className="id" to="">
              nylee9621
            </Link>
          </span>
          <span className="status">회원님을 팔로우합니다</span>
        </div>
        <button className="follow-button">팔로우</button>
      </div>
    );
  }
}

export default RecommendProfile;
