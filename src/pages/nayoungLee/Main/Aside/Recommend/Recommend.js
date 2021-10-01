import React from 'react';
import './Recommend.scss';
import RecommendProfile from './RecommendProfile/RecommendProfile';

class Recommend extends React.Component {
  render() {
    return (
      <div className="Recommend">
        <div className="recommend-header">
          <span>회원님을 위한 추천</span>
          <button className="recommend-all-button">모두 보기</button>
        </div>
        <RecommendProfile />
        <RecommendProfile />
        <RecommendProfile />
        <RecommendProfile />
        <RecommendProfile />
      </div>
    );
  }
}

export default Recommend;
