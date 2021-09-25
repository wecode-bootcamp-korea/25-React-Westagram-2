import React, { Component } from 'react';

class Reply extends Component {
  handleDelete = () => {
    this.props.onDelete(this.props.reply);
  };
  render() {
    const { userId, comment } = this.props.reply;
    return (
      <div className="contents">
        <div className="commentLeft">
          <span className="owner-id">
            <b>{userId}</b>
          </span>
          <span className="owner-content">{comment}</span>
        </div>

        <div className="commnetRight">
          <button className="heart">
            <i className="far fa-heart"></i>
          </button>
          <button className="delete-btn" onClick={this.handleDelete}>
            <i className="fas fa-times"></i>
          </button>
        </div>
      </div>
    );
  }
}

export default Reply;
