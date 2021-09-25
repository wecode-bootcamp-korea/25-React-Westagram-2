import React from 'react';
import { Link } from 'react-router-dom';
import FeedCommentLine from './FeedCommentLine/FeedCommentLine';
import './Feed.scss';

class Feed extends React.Component {
  constructor() {
    super();
    this.state = {
      comment: '',
    };
  }

  handleCommentTextarea = e => {
    this.setState({
      comment: e.target.value,
    });
    e.target.style.height = '24px';
    e.target.style.height = `${e.target.scrollHeight}px`;
  };

  resetCommentTextarea = () => {
    this.setState({
      comment: '',
    });
  };

  clickSubmitBtn = () => {
    this.props.submitComment(this.props.feedId, this.state.comment);
    this.resetCommentTextarea();
  };

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
              <button
                className="feed-button feed-heart-button"
                onClick={() =>
                  this.props.changeIsLike(this.props.feedId, this.props.isLike)
                }
              >
                {this.props.isLike ? (
                  <i className="fas fa-heart"></i>
                ) : (
                  <i className="far fa-heart"></i>
                )}
              </button>
              <button className="feed-button">
                <i className="far fa-comment"></i>
              </button>
              <button className="feed-button">
                <i className="far fa-paper-plane"></i>
              </button>
            </div>
            <div>
              <button
                className="feed-button feed-bookmark-button"
                onClick={() => this.props.changeIsBookmark(this.props.feedId)}
              >
                {this.props.isBookmark ? (
                  <i className="fas fa-bookmark"></i>
                ) : (
                  <i className="far fa-bookmark"></i>
                )}
              </button>
            </div>
          </div>
          <div className="feed-like">
            <Link to="">
              좋아요 <span className="feed-like-num">{this.props.likeNum}</span>
              개
            </Link>
          </div>
          <div className="feed-comments">
            {this.props.commentList.map(comment => (
              <FeedCommentLine
                key={comment.commentId}
                feedId={this.props.feedId}
                commentId={comment.commentId}
                userId={comment.userId}
                comment={comment.comment}
                isLike={comment.isLike}
                removeComment={this.props.removeComment}
                changeCommentIsLike={this.props.changeCommentIsLike}
              />
            ))}
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
            value={this.state.comment}
            onChange={this.handleCommentTextarea}
          ></textarea>
          <button
            className={this.state.comment ? 'active' : 'comment-submit-button'}
            disabled={!this.state.comment}
            onClick={this.clickSubmitBtn}
          >
            게시
          </button>
        </div>
      </article>
    );
  }
}

export default Feed;
