import React, { Component } from 'react';
import Reply from './Reply';
import ReplyAddForm from './ReplyAddForm';

class Replys extends Component {
  handleDelete = reply => {
    this.props.onDelete(reply);
  };

  handleAdd = replyInput => {
    this.props.onAdd(replyInput);
  };

  render() {
    return (
      <>
        <>
          {this.props.replys.map(reply => (
            <Reply key={reply.id} reply={reply} onDelete={this.handleDelete} />
          ))}
        </>
        <ReplyAddForm onAdd={this.handleAdd} />
      </>
    );
  }
}

export default Replys;