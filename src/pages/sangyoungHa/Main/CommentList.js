import React, { Component } from 'react';
import Comment from './Comment';
import './commentList.scss';

export class CommentList extends Component {
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
  uploadComment = e => {
    const { comment, myArray } = this.state;
    myArray.push({ commentKey: comment });
    this.setState({
      comment: '',
    });
  };

  render() {
    const { myArray, comment } = this.state;
    const { commentSave, uploadComment } = this;
    return (
      <div className="commentList">
        <div>
          <br />
          {myArray.map(comment => {
            return <Comment comments={comment.commentKey} />;
          })}
        </div>

        <div className="comment-bar">
          {/*댓글 인풋 바를 감싸주는 comment-bar div, descendant of feed-bottom div */}
          <input
            className="comment-input"
            type="text"
            placeholder="댓글달기.... "
            name="comment"
            value={comment}
            onChange={commentSave}
            onKeyPress={event => {
              if (event.key === 'Enter') {
                uploadComment();
                //if 문 진입하면 함수가 바로 실행되서 () 를 써줘야되는건가..?
              }
            }}
            //onKeyPress={this.enterToUpload}
          />
          <button
            id="button-id"
            className="display-button"
            onClick={uploadComment}
          >
            게시
          </button>
        </div>
      </div>
    );
  }
}

export default CommentList;
