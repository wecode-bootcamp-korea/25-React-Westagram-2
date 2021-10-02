import React, { Component } from 'react';

class StoryUsersList extends Component {
  render() {
    const { userImg, nickname, time } = this.props;
    return (
      <div className="story_users_info">
        <img src={userImg} alt="story_user_info" />
        <div className="story_users_info_txt">
          <p>{nickname}</p>
          <p>
            <span>{time}</span>
          </p>
        </div>
      </div>
    );
  }
}

export default StoryUsersList;
