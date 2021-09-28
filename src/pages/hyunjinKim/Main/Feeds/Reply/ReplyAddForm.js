import React, { PureComponent } from 'react';

class ReplyAddForm extends PureComponent {
  inputRef = React.createRef();

  onSubmit = event => {
    event.preventDefault();
    const replyInput = this.inputRef.current.value;
    console.log(this.props);
    replyInput && this.props.onAdd(replyInput);
    this.inputRef.current.value = '';
  };
  render() {
    return (
      <form className="real-reply" onSubmit={this.onSubmit}>
        <span className="comment-wrapper">
          <input className="comment-input" ref={this.inputRef} />
          <button className="comment-btn">게시</button>
        </span>
      </form>
    );
  }
}

export default ReplyAddForm;
