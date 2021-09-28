import React, { Component } from 'react';
import Comment from './Comment.js';
import './MainHa.scss';

class MainHa extends React.Component {
  constructor() {
    super();
    this.state = {
      comment: '',
      myArray: [],
    };
  }
  // 댓글 입력 내용을 state 로 저장해주는 함수
  commentSave = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  };
  // state 로 저장된 입력값을 comment 라는 object 로 unshift 를 통해 넣어준다.
  uploadComment = () => {
    const { comment, myArray } = this.state;
    myArray.unshift({ commentKey: comment });
    this.setState({ comment: '' });
  };
  /* 엔터키 입력시 댓글이 게시되는 함수를 따로 작성했으나, '엔터키 입력시' 라는 조건을 아예 인풋태그에 주고
     상단의 uploadComment 함수를 재사용 해주었는데 어떤게 더 좋은 방식일까????
  enterToUpload = event => {
    const { comment, myArray } = this.state;
    if (event.key === 'Enter') {
      myArray.unshift({ commentKey: comment });
      this.setState({ comment: '' });
    }
  };*/
  render() {
    const { myArray, comment } = this.state;

    return (
      <>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width" />
        <title>westagram</title>
        <link href="main.css" rel="stylesheet" type="text/css" />
        <link
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
          rel="stylesheet"
        />
        <section className="Main">
          <div className="nav-bar">
            {/*네비게이션 바 용 div*/}
            <span className="nav-left">
              <img
                className="westa-logo"
                alt="westagram logo"
                src="/images/sangyoungHa/westa4.png"
              />
            </span>
            <input
              className="searchbar"
              type="text"
              placeholder=" 검색"
              style={{ fontFamily: 'Arial, FontAwesome' }}
            />
            <span className="nav-right">
              <img
                className="nav-icon"
                alt="compass icon"
                src="/images/sangyoungHa/explore.png"
              />
              <img
                className="nav-icon"
                alt="heart icon"
                src="/images/sangyoungHa/heart.png"
              />
              <img
                className="nav-icon"
                alt="profile icon"
                src="/images/sangyoungHa/profile.png"
              />
            </span>
          </div>
          <div className="main">
            {/*페이지 content 전체를 감싸는 main div*/}
            <div className="feeds">
              {/*피드가 위치하는 feeds div*/}
              <table>
                <tbody>
                  <tr>
                    <td>
                      <img
                        className="round-pics"
                        alt="profile pic"
                        src="/images/sangyoungHa/lettucedog.jpg"
                        height="60px"
                      />
                    </td>
                    <td className="td-text">
                      <strong>lettuce_the_dog</strong>
                    </td>
                    <td className="td-text">
                      <i className="fas fa-ellipsis-h" />
                    </td>
                  </tr>
                </tbody>
              </table>
              <div className="article">
                {/*article 중 메인 이미지가 들어가는 div, descendant of main div*/}
                <img
                  className="my-baby"
                  alt="pic of sangchu"
                  src="/images/sangyoungHa/scbaby1.jpg"
                />
              </div>
              <div className="feed-bottom">
                {/*메인 이미지 아래 아이콘 및 텍스트 및 댓글창이 들어가는 div, descendant of main div */}
                <i className="fas fa-heart" />
                <i className="far fa-comment" />
                <i className="fas fa-upload" />
                <i className="far fa-bookmark" />
                <div className="display-section">
                  {/*텍스트 정보와 입력된 댓글이 들어갈 display-section div, descendant of feed-bottom div*/}
                  <table>
                    <tbody>
                      <tr>
                        <td>
                          <img
                            className="small-round-pics"
                            alt="small profile pic"
                            src="/images/sangyoungHa/bestdog.jpg"
                          />
                        </td>
                        <td>
                          &nbsp;<strong>best_doggo</strong> 외{' '}
                          <strong>10명</strong>이 좋아합니다.
                          <br />
                          <br />
                        </td>
                      </tr>
                    </tbody>
                  </table>
                  <p>
                    <strong>sangchu_daddy</strong>&nbsp; Go fetch me a stick bro
                  </p>
                  <p className="gray-text">42분전</p>
                  <div>
                    {myArray.map(comment => {
                      return <Comment comments={comment.commentKey} />;
                      <div></div>;
                    })}
                  </div>
                </div>
                <div className="comment-bar">
                  {/*댓글 인풋 바를 감싸주는 comment-bar div, descendant of feed-bottom div */}
                  <input
                    className="comment-input"
                    type="text"
                    placeholder="댓글달기.... "
                    name="comment"
                    value={comment}
                    onChange={this.commentSave}
                    onKeyPress={event => {
                      if (event.key === 'Enter') {
                        this.uploadComment();
                        //if 문 진입하면 함수가 바로 실행되서 () 를 써줘야되는건가..?
                      }
                    }}
                    //onKeyPress={this.enterToUpload}
                  />
                  <button
                    id="button-id"
                    className="display-button"
                    onClick={this.uploadComment}
                  >
                    게시
                  </button>
                </div>
              </div>
            </div>
            <div className="main-right">
              {/*우측에 위치한 사이드바 전채를 감싸는 main-right div, descendant of main div*/}
              <div className="right-top">
                {/*3가지 섹션으로 나뉘어져 있는 우측 사이드바중 제일 윗부분, descendant of main-right div*/}
                <table>
                  <tbody>
                    <tr>
                      <td>
                        <img
                          className="round-pics"
                          alt="profile pic"
                          src="/images/sangyoungHa/lettucedog.jpg"
                        />
                      </td>
                      <td className="td-text">
                        <strong>lettuce_the_dog</strong>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="right-middle">
                {/*3가지 섹션으로 나뉘어져 있는 우측 사이드바중 가운데 부분, descendant of main-right div*/}
                <table>
                  <tbody>
                    <tr>
                      <td className="gray-text">스토리</td>
                      <td>   </td>
                      <td>   </td>
                      <td>    </td>
                      <td>
                        <strong>모두보기</strong>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <img
                          className="round-pics"
                          alt="dog profile1"
                          src="/images/sangyoungHa/dogprof1.jpg"
                        />
                      </td>
                      <td className="td-text">
                        <strong>big_sh!t</strong>
                        <br />
                        <span className="gray-text">16분전</span>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <img
                          className="round-pics"
                          alt="dog profile2"
                          src="/images/sangyoungHa/dogprof2.jpg"
                        />
                      </td>
                      <td className="td-text">
                        <strong>husky_dusky</strong>
                        <br />
                        <span className="gray-text">2시간전</span>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <img
                          className="round-pics"
                          alt="dog profile2"
                          src="/images/sangyoungHa/dogprof3.jpg"
                        />
                      </td>
                      <td className="td-text">
                        <strong>little_sh!t</strong>
                        <br />
                        <span className="gray-text">6시간전</span>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="right-bottom">
                {/*3가지 섹션으로 나뉘어져 있는 우측 사이드바중 하단 부분, descendant of main-right div*/}
                <table>
                  <tbody>
                    <tr>
                      <td className="gray-text">회원님을 위한 추천</td>
                      <td>   </td>
                      <td>   </td>
                      <td>   </td>
                      <td>
                        <strong>모두보기</strong>
                      </td>
                    </tr>
                  </tbody>
                </table>
                <table>
                  <tbody>
                    <tr>
                      <td>
                        <img
                          className="round-pics"
                          alt="dog profile4"
                          src="/images/sangyoungHa/dogprof4.jpg"
                        />
                      </td>
                      <td className="td-text">
                        <strong>green_doggo</strong>
                        <br />
                        <span className="gray-text">
                          husky_dusky님 외 1명이..
                        </span>
                        <span className="blue-text">팔로우</span>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <img
                          className="round-pics"
                          alt="dog profile5"
                          src="/images/sangyoungHa/dogprof5.jpg"
                        />
                      </td>
                      <td className="td-text">
                        <strong>bigger_doggo</strong>
                        <br />
                        <span className="gray-text">
                          little_sh!t님 외 2명이..
                        </span>
                        <span className="blue-text">팔로우</span>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <img
                          className="round-pics"
                          alt="dog profile6"
                          src="/images/sangyoungHa/dogprof6.jpg"
                        />
                      </td>
                      <td className="td-text">
                        <strong>husky_blacky</strong>
                        <br />
                        <span className="gray-text">big_dog님 외 4명이..</span>
                        <span className="blue-text">팔로우</span>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="right-text gray-text">
                {/*우측 사이드바 하단의 텍스트 정보를 위한 div */}
                Instagram 정보•지원•홍보
                센터•API•채용정보•개인정보처리방침•약관•디렉터리•프로필•해시태그•언어
                <br />© 2019 INSTAGRAM
              </div>
            </div>
          </div>
        </section>
      </>
    );
  }
}

export default MainHa;
