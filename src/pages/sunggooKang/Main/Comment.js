import React from 'react';

class Comment extends React.Component {
  render() {
    // console.log(this.props.newComment);
    return (
      <>
        {this.props.newComment.map((el, idx) => {
          return <li key={idx}>Kang: {el.text} </li>;
        })}
        {/* <li>{this.props.newComment}</li> */}
      </>
    );
  }
}
export default Comment;
