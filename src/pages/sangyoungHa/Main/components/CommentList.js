import React, { Component } from 'react';
import Comment from './Comment';
import './commentList.scss';

export class CommentList extends Component {
  constructor() {
    super();
    this.state = {
      comment: '',
      commentCopy: [],
    };
  }

  commentSave = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  };

  uploadComment = e => {
    const { comment, commentCopy } = this.state;
    let addComment = commentCopy.concat(comment);
    this.setState({
      commentCopy: addComment,
      comment: '',
    });
  };

  render() {
    const { commentCopy, comment } = this.state;
    const { commentSave, uploadComment } = this;
    return (
      <div className="commentList">
        <div>
          <br />
          {commentCopy.map((comment, index) => {
            return <Comment key={index} comments={comment} />;
          })}
        </div>

        <div className="comment-bar">
          <input
            className="comment-input"
            placeholder="댓글달기.... "
            name="comment"
            value={comment}
            onChange={commentSave}
            onKeyPress={event => {
              if (event.key === 'Enter') {
                uploadComment();
              }
            }}
          />
          <button className="display-button" onClick={uploadComment}>
            게시
          </button>
        </div>
      </div>
    );
  }
}

export default CommentList;
