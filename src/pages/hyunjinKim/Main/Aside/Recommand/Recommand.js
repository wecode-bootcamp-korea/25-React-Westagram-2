import React, { Component } from 'react';

class Recommand extends Component {
  render() {
    const { userId, src, aboutme } = this.props.recommand;
    return (
      <div className="myprofile">
        <div className="profile-left">
          <div className="profile-wrapper profileImg2">
            <span className="user-pic ">
              <img alt="recommend-otherprofile" className="profile" src={src} />
            </span>
          </div>
          <div className="user-wrapper">
            <span className="user-id">{userId} </span>
            <span className="user-location">{aboutme}</span>
          </div>
        </div>
        <span className="profile-right">
          <button className="follow">팔로우</button>
        </span>
      </div>
    );
  }
}

export default Recommand;
