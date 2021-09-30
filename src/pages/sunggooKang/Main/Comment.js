import React from 'react';

class Comment extends React.Component {
  render() {
    console.log('comment', this.props.comment);

    return <li>kang: {this.props.comment.text}</li>;
  }
}

export default Comment;
