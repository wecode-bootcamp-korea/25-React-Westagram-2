import React from 'react';
import { Link } from 'react-router-dom';
import './FeedCommentLine.scss';

class FeedCommentLine extends React.Component {
  render() {
    const {
      feedId,
      commentId,
      userId,
      comment,
      isLike,
      deleteComment,
      toggleCommentIsLike,
    } = this.props;

    return (
      <div className="FeedCommentLine">
        <div>
          <Link className="id" to="">
            {userId}
          </Link>{' '}
          <span>{comment}</span>
        </div>
        <div>
          {userId === 'nylee9621' ? (
            <button onClick={() => deleteComment(feedId, commentId)}>
              <i className="fas fa-ellipsis-h"></i>
            </button>
          ) : (
            ''
          )}
          <button onClick={() => toggleCommentIsLike(feedId, commentId)}>
            {isLike ? (
              <i className="fas fa-heart"></i>
            ) : (
              <i className="far fa-heart"></i>
            )}
          </button>
        </div>
      </div>
    );
  }
}

export default FeedCommentLine;
