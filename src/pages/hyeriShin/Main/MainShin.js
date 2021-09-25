import React, { Component } from 'react';
import './MainShin.scss';
import '../../../styles/reset.scss';
import Reply from './Reply';

class MainShin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      reply: '',
      comment: [],
      commnetList: [
        {
          id: 1,
          userId: '돼톰',
          txt: '돼톰이 좋아요 😍',
        },
        {
          id: 2,
          userId: '루피',
          txt: '루피도 좋아요 🥰',
        },
      ],
    };
  }

  uesrsCommentState = e => {
    this.setState({
      reply: e.target.value,
    });
  };

  uesrsCommentAdd = e => {
    e.preventDefault();
    this.setState({
      comment: this.state.comment.concat(this.state.reply),
      reply: '',
    });
  };

  render() {
    return (
      <div className="MainBody">
        <header>
          <div className="nav_con">
            <div className="logo_cons">
              <img src="/images/hyeriShin/instagram.png" alt="logo_img" />
              <span className="logo_line"></span>
              <h1 className="Mainlogo">
                Tomstagram <i className="fas fa-dog"></i>
              </h1>
            </div>

            <form>
              <input type="text" placeholder="검색" />
              <i className="fas fa-search"></i>
            </form>

            <nav>
              <div className="nav_icons">
                <img
                  src="/images/hyeriShin/explore.png"
                  alt="explore_img"
                  className="nav_icons_bell"
                />
                <img src="/images/hyeriShin/heart.png" alt="heart_img" />
                <img src="/images/hyeriShin/profile.png" alt="profile_img" />
              </div>
            </nav>
          </div>
        </header>

        <section>
          <article>
            <div className="main_container">
              <div className="feeds_users">
                <div className="feeds_users_info">
                  <img
                    src="/images/hyeriShin/feed_user.jpeg"
                    alt="feed_user_img"
                  />
                  <div className="feeds_users_info_txt">
                    <p className="feeds_users_id">jetom_loopy</p>
                    <p>Shinhyeri</p>
                  </div>
                </div>
                <i className="fas fa-ellipsis-h"></i>
              </div>

              <div className="feeds_main_img">
                <img
                  src="/images/hyeriShin/feed_main_img.png"
                  alt="eed_main_img.png"
                />
              </div>

              <div className="feeds_info">
                <div className="feeds_icons">
                  <i className="fas fa-heart icon_padding"></i>
                  <i className="far fa-comment icon_padding"></i>
                  <i className="far fa-share-square icon_padding"></i>

                  <i className="far fa-bookmark"></i>
                </div>
                <div className="feeds_comment_box">
                  <div className="like_uesrs">
                    <img
                      src="/images/hyeriShin/feed_comment_samll_img.jpeg"
                      alt="feeds_commnet_small_img"
                    />
                    <p>
                      <span className="feeds_comment_uesrs_id">Jetom</span>님{' '}
                      <span className="feeds_comment_uesrs_id">외 999명</span>이
                      좋아합니다.
                    </p>
                  </div>
                  <div className="feeds_comment_uesrs">
                    <p>
                      <span className="feeds_comment_uesrs_id">Jetom_love</span>
                      <span>제톰이 귀엽지않나여?!!!</span>
                      <span className="comment_see_more">더 보기</span>
                    </p>
                  </div>

                  <div className="feeds_comment_uesrs">
                    {this.state.commnetList.map(item => {
                      return (
                        <Reply
                          key={item.id}
                          userId={item.userId}
                          txt={item.txt}
                        />
                      );
                    })}
                  </div>

                  <div className="feeds_comment_like_btn_box">
                    <p>
                      <span className="feeds_comment_uesrs_id">loopy_:3</span>
                      <span> 5살 / 비숑 / 남자애기입니다!</span>
                    </p>
                    <p>
                      <img
                        className="like_btn"
                        alt="like_btn"
                        src="/images/hyeriShin/heart.png"
                      />
                    </p>
                  </div>

                  <div className="feeds_comment_uesrs">
                    {this.state.comment.map((comment, index) => {
                      return (
                        <p key={index}>
                          <span>{comment}</span>
                        </p>
                      );
                    })}
                  </div>

                  <p className="feeds_comment_tiem">1분전</p>
                </div>
              </div>

              <div className="comment_input">
                <form>
                  <input
                    className="comment_input_txt"
                    onChange={this.uesrsCommentState}
                    value={this.state.reply}
                    type="text"
                    placeholder="댓글 달기..."
                  />
                  <button
                    className="comment_btn"
                    onClick={this.uesrsCommentAdd}
                    type="submit"
                  >
                    게시
                  </button>
                </form>
              </div>
            </div>

            <div className="sub_container">
              <div className="feeds_profile">
                <img
                  src="/images/hyeriShin/feed_user.jpeg"
                  alt="feed_comment_small_img"
                  className="feed_comment_small_img"
                />
                <div className="small_info">
                  <p className="feeds_user_info">jetom_loopy</p>
                  <p>Shinhyeri</p>
                </div>
              </div>
              <div className="feeds_story_container">
                <div className="feeds_story_box">
                  <div className="feeds_box_txt">
                    <p>스토리</p>
                    {/* <p><a href="#">모두보기</a></p> */}
                  </div>
                  <div className="story_users">
                    <div className="story_users_info">
                      <img
                        src="/images/hyeriShin/story_users_info_img.png"
                        alt="story_users_info_img"
                      />
                      <div className="story_users_info_txt">
                        <p>Shinhyeri</p>
                        <p>
                          <span>16분전</span>
                        </p>
                      </div>
                    </div>
                    <div className="story_users_info">
                      <img
                        src="/images/hyeriShin/story_users_info_img2.png"
                        alt="story_users_info_img"
                      />
                      <div className="story_users_info_txt">
                        <p>SoonE</p>
                        <p>
                          <span>30분전</span>
                        </p>
                      </div>
                    </div>
                    <div className="story_users_info">
                      <img
                        src="/images/hyeriShin/story_users_info_img3.png"
                        alt="story_users_info_img"
                      />
                      <div className="story_users_info_txt">
                        <p>BaBa</p>
                        <p>
                          <span>45분전</span>
                        </p>
                      </div>
                    </div>
                    <div className="story_users_info">
                      <img
                        src="/images/hyeriShin/story_users_info_img4.png"
                        alt="story_users_info_img"
                      />
                      <div className="story_users_info_txt">
                        <p>Hacho</p>
                        <p>
                          <span>1시간전</span>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="feeds_recommend_container">
                <div className="feeds_recommend_box">
                  <div className="feeds_box_txt">
                    <p>회원님을 위한 추천</p>
                    <p>
                      <span>모두보기</span>
                    </p>
                  </div>
                  <div className="feeds_recommend_users">
                    <div className="recommend_users_info">
                      <img
                        src="/images/hyeriShin/story_users_info_img2.png"
                        alt="story_users_info_img"
                      />
                      <div className="recommend_users_info_txt">
                        <p>SoonE</p>
                        <p className="recommend_txt">
                          JaeSoon님 외 5명이 알고있습니다.
                        </p>
                      </div>
                      <div className="users_follow">
                        {/* <a href="#" className="follow_link">팔로우</a> */}
                      </div>
                    </div>
                    <div className="recommend_users_info">
                      <img
                        src="/images/hyeriShin/story_users_info_img4.png"
                        alt="story_users_info_img"
                      />
                      <div className="recommend_users_info_txt">
                        <p>Hacho</p>
                        <p className="recommend_txt">
                          subin님 외 8명이 알고있습니다.
                        </p>
                      </div>
                      <div className="uers_follow">
                        {/* <a href="#" className="follow_link">팔로우</a> */}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="company_info">
                <address>
                  <ul>
                    <li>
                      <span>Tomstagram 정보</span>
                    </li>
                    <li>
                      <span>지원</span>
                    </li>
                    <li>
                      <span>홍보 센터</span>
                    </li>
                    <li>
                      <span>API</span>
                    </li>
                    <li>
                      <span>채용 정보</span>
                    </li>
                    <li>
                      <span>개인정보처리방침</span>
                    </li>
                    <li>
                      <span>약관</span>
                    </li>
                    <li>
                      <span>디렉터리</span>
                    </li>
                    <li>
                      <span>프로필</span>
                    </li>
                    <li>
                      <span>해시태그</span>
                    </li>
                    <li>
                      <span>언어</span>
                    </li>
                  </ul>
                </address>
                <p>&#x00A9; 2021 TOMSTAGRAM FROM SHINHYERI</p>
              </div>
            </div>
          </article>
        </section>
      </div>
    );
  }
}

export default MainShin;
