import React from 'react';
import './comment.scss';

class Comment extends React.Component {
  constructor() {
    super();
    this.state = {
      // 초기값 세팅, this.state가 많을 순 없다.
      newReply: '', // 새롭게 들어온 값들 입력
      replies: [],
    };
  }

  textChange = e => {
    // e.preventDefault();
    this.setState({
      newReply: e.target.value,
    });
  };

  add = () => {
    let arr = this.state.replies;
    arr.push({
      text: this.state.newReply,
    });
    this.setState({
      replies: arr,
      newReply: '',
    });
  };

  pressEnter = e => {
    // e.preventDefault();
    if (e.key === 'Enter' && this.state.newReply) {
      // e.key === 'Enter' 조건은 안달아도 작동이 되네????????????? >> 아무거나 타이핑 해도 이제 계속 add됨
      this.add();
      e.target.value = '';
    }
  };

  isClicked = e => {
    e.preventDefault();
    if (this.state.newReply) {
      this.add();
      e.target.value = '';
    }
  };

  render() {
    return (
      <div className="Comment">
        <ul className="textbox">
          {this.state.replies.map((el, idx) => (
            <li key={idx}>Kang : {el.text}</li>
          ))}
        </ul>
        <div className="commentBtn">
          <input
            className="commentBox"
            type="text"
            placeholder="댓글달기..."
            onChange={this.textChange} // 타이핑할때마다
            value={this.state.newReply} // 여기에 집어넣음
            onKeyPress={this.pressEnter} // 엔터쳤을때 댓글 등록되게함.
          />
          <button onClick={this.isClicked}>게시</button>
        </div>
      </div>
    );
  }
}

export default Comment;
