import React, { Component } from 'react';
//import { withRouter } from 'react-router';
import './MainKim.scss';
import '../../../styles/common.scss';
import '../../../styles/reset.scss';

class MainKim extends Component {
  render() {
    return (
      <div className="Main">
        <div className="total-wrapper">
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
                  alr="profile"
                  src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/profile.png"
                />
                <div className="menu-user-pic">
                  <img
                    className="menu-profile"
                    src="/images/hyunjinKim/profile.jpeg"
                  />
                </div>
              </span>
            </nav>
          </div>
          <div className="main-wrapper">
            <main>
              <div className="feeds-wrapper">
                <div className="feeds">
                  <article>
                    <div className="user-info">
                      <div className="profile-wrapper">
                        <span className="user-pic">
                          <img
                            className="profile"
                            src="/images/hyunjinKim/profile.jpeg"
                          />
                        </span>
                      </div>
                      <span className="user-id">
                        71summernight
                        <div className="user-location">송파동 어딘가에서..</div>
                      </span>
                    </div>
                    <div className="feed-subject">
                      <img
                        alr="feed-subject"
                        src="/images/hyunjinKim/moongchi.jpeg"
                      />
                    </div>

                    <div className="reply">
                      <span className="reply-left">
                        <img alt="heart" src="images/hyunjinKim/heart.png" />
                        <img
                          alt="comment"
                          src="images/hyunjinKim/comment.png"
                        />
                        <img alt="dm" src="images/hyunjinKim/dm.png" />
                      </span>

                      <span className="reply-right">
                        <i className="far fa-bookmark"></i>
                      </span>
                    </div>
                    <div className="heart-count">좋아요 1000개</div>
                    <div className="heart-count"></div>
                    <div className="comments">
                      <span className="owner-id">71summernight</span>
                      <span className="owner-content">뭉치야 안녕</span>
                    </div>
                    <div className="real-reply">
                      <span className="comment-wrapper">
                        <input className="comment-input" />
                        <button className="comment-btn">게시</button>
                      </span>
                    </div>
                  </article>
                </div>

                <div className="feeds">
                  <article>
                    <div className="user-info">
                      <div className="profile-wrapper">
                        <span className="user-pic">
                          <img
                            alt="myprofile"
                            className="profile"
                            src="/images/hyunjinKim/profile.jpeg"
                          />
                        </span>
                      </div>
                      <span className="user-id">
                        71summernight
                        <div className="user-location">송파동 어딘가에서..</div>
                      </span>
                    </div>
                    <div className="feed-subject">
                      <img
                        alt="feed-subject"
                        src="/images/hyunjinKim/woozoo.png"
                      />
                    </div>

                    <div className="reply">
                      <span className="reply-left">
                        <img alt="heart" src="images/hyunjinKim/heart.png" />
                        <img
                          alt="comment"
                          src="images/hyunjinKim/comment.png"
                        />
                        <img alt="dm" src="images/hyunjinKim/dm.png" />
                      </span>

                      <span className="reply-right">
                        <i className="far fa-bookmark"></i>
                      </span>
                    </div>
                    <div className="heart-count">좋아요 1000개</div>
                    <div className="heart-count"></div>
                    <div className="comments">
                      <span className="owner-id">71summernight</span>
                      <span className="owner-content">뭉치야 안녕</span>
                    </div>
                    <div className="real-reply">
                      <span className="comment-wrapper">
                        <input className="comment-input" />
                        <button className="comment-btn">게시</button>
                      </span>
                    </div>
                  </article>
                </div>
              </div>

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
                        <div className="user-location">
                          데데에용 잘부탁드립니다
                        </div>
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
            </main>
          </div>
        </div>
      </div>
    );
  }
}
export default MainKim;
