import React, { Component } from 'react';

class Reply extends Component {
  componentDidMount() {}

  render() {
    return (
      <>
        <p>
          <span className="feeds_comment_uesrs_id">{this.props.userId}</span>
          <span>{this.props.txt}</span>
        </p>
      </>
    );
  }
}

export default Reply;
