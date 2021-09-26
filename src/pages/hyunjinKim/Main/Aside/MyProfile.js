import React, { Component } from 'react';

class MyProfile extends Component {
  render() {
    return (
      <div className="myprofle">
        <div className="profile-wrapper profileImg2">
          <span className="user-pic">
            <img className="profile " src="/images/hyunjinKim/profile.jpeg" />
          </span>
        </div>
        <span className="user-info-wrapeer">
          <span className="recommand-user-id ">
            71summernight
            <div className="recommand-user-location">현진</div>
          </span>
        </span>
      </div>
    );
  }
}

export default MyProfile;
