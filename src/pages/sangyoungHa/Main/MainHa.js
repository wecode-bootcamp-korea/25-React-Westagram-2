import React, { Component } from 'react';
import CommentList from './components/CommentList';
import RightMiddle from './components/RightMiddle';
import RightTop from './components/RightTop';
import RightBottom from './components/RightBottom';
import Footer from './components/Footer';
import './MainHa.scss';

class MainHa extends React.Component {
  constructor() {
    super();
    this.state = {
      commentArray: [],
    };
  }

  componentDidMount() {
    fetch('data/commentData.json')
      .then(res => res.json())
      .then(data => {
        this.setState({
          commentArray: data,
        });
      });
  }
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
    const { commentArray } = this.state;

    return (
      <>
        <section className="Main">
          <div className="nav-bar">
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
            <div className="feeds">
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
                <img
                  className="my-baby"
                  alt="pic of sangchu"
                  src="/images/sangyoungHa/scbaby1.jpg"
                />
              </div>
              <div className="feed-bottom">
                <i className="fas fa-heart" />
                <i className="far fa-comment" />
                <i className="fas fa-upload" />
                <i className="far fa-bookmark" />
                <div className="display-section">
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
                  <p className="gray-text">59분전</p>
                  <div>
                    {commentArray.map((comment, index) => {
                      return (
                        <ul key={index}>
                          <br />
                          <div>
                            <strong>{comment.userName}</strong>
                            {comment.content}
                          </div>
                          <br />
                          <span className="gray-text">{comment.timeAgo}</span>
                        </ul>
                      );
                    })}
                  </div>
                  <div>
                    <CommentList />
                  </div>
                </div>
              </div>
            </div>
            <div className="main-right">
              <RightTop />
              <RightMiddle />
              <RightBottom />
              <Footer />
            </div>
          </div>
        </section>
      </>
    );
  }
}

export default MainHa;
