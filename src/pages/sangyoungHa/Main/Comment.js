import React, { Component } from 'react';

class Comment extends Component {
  render() {
    let date = new Date();
    return (
      <div id="comment-insert">
        <strong>sangchu_daddy</strong>&nbsp;
        {this.props.comments}
        <div className="gray-text">{date.getMinutes()} 분전</div>
      </div>
    );
  }
}

export default Comment;
