import React, { Component } from 'react';

class Comment extends Component {
  render() {
    return <div id="comment-insert">{this.props.comments}</div>;
  }
}

export default Comment;
