import React, { Component } from 'react';
import Replys from './Reply/Replys';
class Feed extends Component {
  state = {
    replys: [
      { id: 1, userId: 'taehi.o', comment: '뭉치 넘 귀여워' },
      { id: 2, userId: '2arrr', comment: '뭉치 잘지내?' },
      { id: 3, userId: 'so5raa', comment: '헉 반함' },
    ],
  };
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
    return (
      <>
        <div className="feeds">
          <article>
            <div className="user-info">
              <div className="profile-wrapper">
                <span className="user-pic">
                  <img
                    className="profile"
                    src="/images/hyunjinKim/profile.jpeg"
                  />
                </span>
              </div>
              <span className="user-id">
                71summernight
                <div className="user-location">송파동 어딘가에서..</div>
              </span>
            </div>
            <div className="feed-subject">
              <img alr="feed-subject" src="/images/hyunjinKim/moongchi.jpeg" />
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
              <span className="owner-id">71summernight</span>
              <span className="owner-content">뭉치야 안녕</span>
            </div>
            <Replys
              replys={this.state.replys}
              onDelete={this.handleDelete}
              onAdd={this.handleAdd}
            />
          </article>
        </div>

        <div className="feeds">
          <article>
            <div className="user-info">
              <div className="profile-wrapper">
                <span className="user-pic">
                  <img
                    alt="myprofile"
                    className="profile"
                    src="/images/hyunjinKim/profile.jpeg"
                  />
                </span>
              </div>
              <span className="user-id">
                71summernight
                <div className="user-location">송파동 어딘가에서..</div>
              </span>
            </div>
            <div className="feed-subject">
              <img alt="feed-subject" src="/images/hyunjinKim/woozoo.png" />
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
              <span className="owner-id">71summernight</span>
              <span className="owner-content">뭉치야 안녕</span>
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
