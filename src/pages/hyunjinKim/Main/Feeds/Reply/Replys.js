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
            <Reply
              key={reply.id}
              reply={reply}
              comment={reply.comment}
              onDelete={this.handleDelete}
            />
          ))}
        </>
        <ReplyAddForm
          onAdd={this.handleAdd}
          hadleAddByEnter={this.props.hadleAddByEnter}
        />
      </>
    );
  }
}

export default Replys;
