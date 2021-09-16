import React from 'react';
import { Link } from 'react-router-dom';
import FeedCommentLine from './FeedCommentLine/FeedCommentLine';
import './Feed.scss';

class Feed extends React.Component {
  render() {
    return (
      <article className="Feed">
        <header className="feed-profile">
          <Link to="">
            <img
              className="profile-image"
              alt="피드 글쓴이 프로필 사진"
              src="/images/nayoungLee/망붕배경.jpg"
            />
          </Link>
          <div className="nametag">
            <span>
              <Link className="id" to="">
                nylee9621
              </Link>
            </span>
            <span>
              <Link className="feed-location" to="">
                WeCode - 위코드
              </Link>
            </span>
          </div>
          <button className="feed-option-button">
            <i className="fas fa-ellipsis-h"></i>
          </button>
        </header>
        <img alt="피드 사진" src="/images/nayoungLee/세븐틴.jpg" />
        <div className="feed-reaction">
          <div className="feed-buttons">
            <div>
              <button className="feed-button feed-heart-button">
                <i className="far fa-heart"></i>
              </button>
              <button className="feed-button">
                <i className="far fa-comment"></i>
              </button>
              <button className="feed-button">
                <i className="far fa-paper-plane"></i>
              </button>
            </div>
            <div>
              <button className="feed-button feed-bookmark-button">
                <i className="far fa-bookmark"></i>
              </button>
            </div>
          </div>
          <div className="feed-like">
            <Link to="">
              좋아요 <span className="feed-like-num">7</span>개
            </Link>
          </div>
          <div className="feed-comments">
            <FeedCommentLine />
            <FeedCommentLine />
            <FeedCommentLine />
          </div>
          <Link className="feed-date" to="">
            6월 30일
          </Link>
        </div>
        <div className="my-reaction">
          <button className="feed-button">
            <i className="far fa-smile"></i>
          </button>
          <textarea
            className="my-comment"
            placeholder="댓글 달기..."
          ></textarea>
          <button className="comment-submit-button" disabled={true}>
            게시
          </button>
        </div>
      </article>
    );
  }
}

export default Feed;
