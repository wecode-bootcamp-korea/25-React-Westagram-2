import React, { Component } from 'react';

class Feeds extends Component {
  constructor(props) {
    super(props);

    this.state = {
      reply: '',
      comment: [],
    };
  }

  uesrsCommentState = e => {
    this.setState({
      reply: e.target.value,
    });
  };

  uesrsCommentAdd = e => {
    e.preventDefault();
    const { comment, reply } = this.state;
    this.setState({
      comment: [...comment, reply],
      reply: '',
    });
  };

  render() {
    const { reply, comment } = this.state;
    const { feedsUserId, feedsName, feedsImg, feedsComment } = this.props;
    const { uesrsCommentAdd, uesrsCommentState } = this;

    return (
      <div className="feeds">
        <div className="feeds_users">
          <div className="feeds_users_info">
            <img src="/images/hyeriShin/feed_user.jpeg" alt="feed_user_img" />
            <div className="feeds_users_info_txt">
              <p className="feeds_users_id">{feedsUserId}</p>
              <p>{feedsName}</p>
            </div>
          </div>
          <i className="fas fa-ellipsis-h"></i>
        </div>
        <div className="feeds_main_img">
          <img src={feedsImg} alt="feeds_main_img" />
        </div>
        <div className="feeds_info">
          <div className="feeds_icons">
            <i className="fas fa-heart icon_padding"></i>
            <i className="far fa-comment icon_padding"></i>
            <i className="far fa-share-square icon_padding"></i>

            <i className="far fa-bookmark"></i>
          </div>
          <div className="feeds_comment_box">
            <div className="like_uesrs">
              <img
                src="/images/hyeriShin/feed_comment_samll_img.jpeg"
                alt="feeds_commnet_small_img"
              />
              <p>
                <strong>Jetom</strong>님 외<strong> 999명</strong>이 좋아합니다.
              </p>
            </div>
            <div className="feeds_comment_uesrs">
              <p>
                <span className="feeds_comment_uesrs_id">{feedsUserId}</span>
                <span>{feedsComment}</span>
              </p>
              {comment.map((item, idx) => {
                return <p key={idx}> {item} </p>;
              })}
            </div>

            <p className="feeds_comment_tiem">1분전</p>
          </div>
        </div>
        <div className="comment_input">
          <form onSubmit={uesrsCommentAdd}>
            <input
              className="comment_input_txt"
              onChange={uesrsCommentState}
              value={reply}
              type="text"
              placeholder="댓글 달기..."
            />
            <button
              className="comment_btn"
              onClick={uesrsCommentAdd}
              type="submit"
            >
              게시
            </button>
          </form>
        </div>
      </div>
    );
  }
}

export default Feeds;
