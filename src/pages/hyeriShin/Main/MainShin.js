import React, { Component } from 'react';
import Reply from './Reply';
import Feeds from './Feeds';
import COMPANY_INFO from '../../../components/Company_info';
import './MainShin.scss';

class MainShin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      feedsList: [],
    };
  }

  componentDidMount() {
    fetch('http://localhost:3000/data/feedsData.json')
      .then(res => res.json())
      .then(data => {
        this.setState({
          feedsList: data,
        });
      });
  }

  render() {
    const { feedsList } = this.state;

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
                <img src="/images/hyeriShin/profile.png" alt="내 정보" />
              </div>
            </nav>
          </div>
        </header>

        <section>
          <article>
            <div className="main_container">
              {feedsList.map(item => {
                return (
                  <Feeds
                    key={item.id}
                    feedsUserId={item.feedsUserId}
                    feedsName={item.feedsName}
                    feedsImg={item.feedsImg}
                    feedsComment={item.feedsComment}
                  />
                );
              })}
            </div>
          </article>

          <article>
            <div className="sub_container">
              <div className="feeds_profile">
                <img
                  className="feed_comment_small_img"
                  src="/images/hyeriShin/feed_user.jpeg"
                  alt="feed_comment_small_img"
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
                    {COMPANY_INFO.map(listData => {
                      return (
                        <li key={listData.id}>
                          <span>{listData.content}</span>
                        </li>
                      );
                    })}
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
