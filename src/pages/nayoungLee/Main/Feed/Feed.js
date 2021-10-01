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

  commentRef = React.createRef();

  handleCommentTextarea = e => {
    this.setState({
      comment: e.target.value,
    });
    e.target.style.height = '24px';
    e.target.style.height = `${e.target.scrollHeight}px`;
  };

  clickSubmitBtn = () => {
    this.props.submitComment(this.props.feedId, this.state.comment);
    this.resetCommentTextarea();
  };

  resetCommentTextarea = () => {
    this.setState({
      comment: '',
    });
    this.commentRef.current.style.height = '24px';
  };

  handlePressEnter = e => {
    if (this.state.comment.trim() && e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      this.clickSubmitBtn();
    }
  };

  render() {
    const {
      feedId,
      isLike,
      isBookmark,
      likeNum,
      commentList,
      toggleIsLike,
      toggleIsBookmark,
      deleteComment,
      toggleCommentIsLike,
    } = this.props;

    const { comment } = this.state;

    return (
      <article className="Feed">
        <header className="profile">
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
              <Link className="location" to="">
                WeCode - 위코드
              </Link>
            </span>
          </div>
          <button className="option-button">
            <i className="fas fa-ellipsis-h" />
          </button>
        </header>
        <img alt="피드 사진" src="/images/nayoungLee/세븐틴.jpg" />
        <div className="reaction">
          <div className="button-block">
            <div>
              <button
                className="buttons heart-button"
                onClick={() => toggleIsLike(feedId, isLike)}
              >
                <i
                  className={`fa-heart ${
                    isLike ? 'fas heart-button-click' : 'far'
                  }`}
                />
              </button>
              <button className="buttons">
                <i className="far fa-comment" />
              </button>
              <button className="buttons">
                <i className="far fa-paper-plane" />
              </button>
            </div>
            <div>
              <button
                className="buttons bookmark-button"
                onClick={() => toggleIsBookmark(feedId)}
              >
                <i className={`fa-bookmark ${isBookmark ? 'fas' : 'far'}`} />
              </button>
            </div>
          </div>
          <div className="like-num">
            <Link to="">좋아요 {likeNum}개</Link>
          </div>
          <div>
            {commentList.map(comment => (
              <FeedCommentLine
                key={comment.commentId}
                feedId={feedId}
                commentId={comment.commentId}
                userId={comment.userId}
                comment={comment.comment}
                isLike={comment.isLike}
                deleteComment={deleteComment}
                toggleCommentIsLike={toggleCommentIsLike}
              />
            ))}
          </div>
          <Link className="date" to="">
            6월 30일
          </Link>
        </div>
        <div className="my-reaction">
          <button className="buttons">
            <i className="far fa-smile" />
          </button>
          <textarea
            className="comment"
            placeholder="댓글 달기..."
            ref={this.commentRef}
            value={comment}
            onChange={this.handleCommentTextarea}
            onKeyPress={this.handlePressEnter}
          ></textarea>
          <button
            className={comment.trim() ? 'active' : 'submit-button'}
            disabled={!comment}
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
