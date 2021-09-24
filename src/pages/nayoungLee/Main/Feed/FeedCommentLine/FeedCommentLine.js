import React from 'react';
import { Link } from 'react-router-dom';
import './FeedCommentLine.scss';

class FeedCommentLine extends React.Component {
  render() {
    return (
      <div className="FeedCommentLine">
        <div>
          <Link className="id" to="">
            {this.props.userId}
          </Link>{' '}
          <span>{this.props.comment}</span>
        </div>
        <div>
          <button
            className="feed-comment-heart-button"
            onClick={() =>
              this.props.changeCommentIsLike(
                this.props.feedId,
                this.props.commentId
              )
            }
          >
            {this.props.isLike ? (
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
