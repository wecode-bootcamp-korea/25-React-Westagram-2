import React, { Component } from 'react';
import Replys from './Reply/Replys';
class Feed extends Component {
  constructor() {
    super();
    this.state = {
      replys: [],
      replyInput: '',
    };
  }

  componentDidMount() {
    fetch('http://localhost:3000/data/commentData.json', {
      method: 'GET',
    })
      .then(res => res.json())
      .then(data => {
        this.setState({
          replys: data,
        });
      });
  }

  handleDelete = reply => {
    const replys = this.state.replys.filter(item => item.id !== reply.id);
    this.setState({ replys });
  };

  handleAdd = replyInput => {
    const replys = [
      ...this.state.replys,
      { id: Date.now(), userId: '71summsernight', comment: replyInput },
    ];
    this.setState({ replys });
  };
  render() {
    const { nickname, userLocation, UserImage, subjectImage, content } =
      this.props.feed;

    return (
      <>
        <div className="feeds">
          <article>
            <div className="user-info">
              <div className="profile-wrapper">
                <span className="user-pic">
                  <img alt="userprofile" className="profile" src={UserImage} />
                </span>
              </div>
              <span className="user-id">
                {nickname}
                <div className="user-location">{userLocation}</div>
              </span>
            </div>
            <div className="feed-subject">
              <img alt="feed-subject" src={subjectImage} />
            </div>

            <div className="reply">
              <span className="reply-left">
                <img alt="heart" src="images/hyunjinKim/heart.png" />
                <img alt="comment" src="images/hyunjinKim/comment.png" />
                <img alt="dm" src="images/hyunjinKim/dm.png" />
              </span>

              <span className="reply-right">
                <i className="far fa-bookmark"></i>
              </span>
            </div>
            <div className="heart-count">좋아요 1000개</div>
            <div className="heart-count"></div>
            <div className="comments">
              <span className="owner-id">{nickname}</span>
              <span className="owner-content">{content}</span>
            </div>
            <Replys
              replys={this.state.replys}
              onDelete={this.handleDelete}
              onAdd={this.handleAdd}
            />
          </article>
        </div>
      </>
    );
  }
}

export default Feed;
