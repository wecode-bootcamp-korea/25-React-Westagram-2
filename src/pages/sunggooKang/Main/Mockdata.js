import React from 'react';

class Mockdata extends React.Component {
  render() {
    // console.log(this.props);
    return (
      <li>
        {this.props.comment.userName}: {this.props.comment.content}
      </li>
    );
  }
}

export default Mockdata;
