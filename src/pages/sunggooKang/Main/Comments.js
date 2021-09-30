import React from 'react';
import Comment from './Comment';
import './Comments.scss';

class Comments extends React.Component {
  constructor() {
    super();
    this.state = {
      // 초기값 세팅, this.state가 많을 순 없다.
      commentValue: '', // 새롭게 들어온 값들 입력
      commentList: [],
    };
  }

  textChange = e => {
    // e.preventDefault();
    this.setState({
      commentValue: e.target.value,
    });
  };

  add = () => {
    let arr = this.state.commentList;
    arr.push({
      text: this.state.commentValue,
    });
    this.setState({
      commentList: arr,
      commentValue: '',
    });
  };

  pressEnter = e => {
    // e.preventDefault();
    if (e.key === 'Enter' && this.state.commentValue) {
      this.add();
      e.target.value = '';
    }
  };

  isClicked = e => {
    e.preventDefault();
    if (this.state.commentValue) {
      this.add();
      e.target.value = '';
    }
  };

  render() {
    return (
      <div className="Comment">
        <ul className="textbox">
          {this.state.commentList.map((el, index) => (
            <Comment key={index} comment={el} />
          ))}
        </ul>
        <div className="commentBtn">
          <input
            className="commentBox"
            type="text"
            placeholder="댓글달기..."
            onChange={this.textChange} // 타이핑할때마다
            value={this.state.commentValue} // 여기에 집어넣음
            onKeyPress={this.pressEnter} // 엔터쳤을때 댓글 등록되게함.
          />
          <button onClick={this.isClicked}>게시</button>
        </div>
      </div>
    );
  }
}

export default Comments;
