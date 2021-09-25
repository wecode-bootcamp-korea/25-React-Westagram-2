import React, { Component } from 'react';

class Aside extends Component {
  render() {
    return (
      <div className="main-right">
        <div className="recommend">
          <div className="myprofle">
            <div className="profile-wrapper">
              <span className="user-pic">
                <img
                  className="profile"
                  src="/images/hyunjinKim/profile.jpeg"
                />
              </span>
            </div>
            <span className="user-info-wrapeer">
              <span className="recommand-user-id">
                71summernight
                <div className="recommand-user-location">현진</div>
              </span>
            </span>
          </div>

          <div className="recommend-title">
            회원님을 위한 추천
            <div className="myprofle">
              <div className="profile-wrapper">
                <span className="user-pic">
                  <img
                    alt="recommend-otherprofile"
                    className="profile"
                    src="/images/hyunjinKim/hodu.jpeg"
                  />
                </span>
              </div>

              <span className="user-id">
                2arrr
                <div className="user-location">호두래요</div>
              </span>
            </div>
            <div className="myprofle">
              <div className="profile-wrapper">
                <span className="user-pic">
                  <img
                    alt="recommend-otherprofile"
                    className="profile"
                    src="/images/hyunjinKim/ggongggong.jpeg"
                  />
                </span>
              </div>
              <span className="user-id">
                so5raa
                <div className="user-location">꿍꿍이 엄마</div>
              </span>
            </div>
            <div className="myprofle">
              <div className="profile-wrapper">
                <span className="user-pic">
                  <img
                    alt="recommend-otherprofile"
                    className="profile"
                    src="/images/hyunjinKim/dede.jpeg"
                  />
                </span>
              </div>
              <span className="user-id">
                imdede
                <div className="user-location">데데에용 잘부탁드립니다</div>
              </span>
            </div>
            <div className="myprofle">
              <div className="profile-wrapper">
                <span className="user-pic">
                  <img
                    alt="recommend-otherprofile"
                    className="profile"
                    src="/images/hyunjinKim/golden.jpeg"
                  />
                </span>
              </div>
              <span className="user-id">
                golden
                <div className="user-location">골댕이 김몽충</div>
              </span>
            </div>
            <div className="myprofle">
              <div className="profile-wrapper">
                <span className="user-pic">
                  <img
                    alt="recommend-otherprofile"
                    className="profile"
                    src="/images/hyunjinKim/sun.jpeg"
                  />
                </span>
              </div>
              <span className="user-id">
                sundaymorning
                <div className="user-location">내일의 해가 뜬당</div>
              </span>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Aside;
