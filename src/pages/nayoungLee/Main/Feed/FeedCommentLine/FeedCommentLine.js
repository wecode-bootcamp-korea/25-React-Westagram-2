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
        <div className="right">
          {userId === 'nylee9621' ? (
            <button onClick={() => deleteComment(feedId, commentId)}>
              <i className="fas fa-ellipsis-h" />
            </button>
          ) : (
            ''
          )}
          <button onClick={() => toggleCommentIsLike(feedId, commentId)}>
            <i
              className={`fa-heart ${
                isLike ? 'fas heart-button-click' : 'far'
              }`}
            />
          </button>
        </div>
      </div>
    );
  }
}

export default FeedCommentLine;
