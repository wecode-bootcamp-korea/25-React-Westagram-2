import React from 'react';
import Comment from './Comment';
import './Comments.scss';
import Mockdata from './Mockdata';

class Comments extends React.Component {
  render() {
    // console.log(this.props.commentList);
    return (
      <div className="Comment">
        <ul className="textbox">
          {this.props.commentList.map((el, index) => (
            <Mockdata key={index} comment={el} />
          ))}

          <Comment newComment={this.props.newComment} />

          {/* {this.props.commentList.map((el, index) => (
            <Comment key={index} comment={el} />
          ))} */}
        </ul>
        <div className="commentBtn">
          <input
            className="commentBox"
            type="text"
            placeholder="댓글달기..."
            onChange={this.props.textChange}
            value={this.props.commentValue}
            onKeyPress={this.props.pressEnter}
          />
          <button onClick={this.props.isClicked}>게시</button>
        </div>
      </div>
    );
  }
}

export default Comments;
