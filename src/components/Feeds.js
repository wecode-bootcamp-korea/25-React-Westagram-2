import React, { Component } from 'react';

class Feeds extends Component {
  render() {
    return (
      <div className="feeds">
        <div className="feeds_users">
          <div className="feeds_users_info">
            <img src="/images/hyeriShin/feed_user.jpeg" alt="feed_user_img" />
            <div className="feeds_users_info_txt">
              <p className="feeds_users_id">{this.props.feedsUserId}</p>
              <p>{this.props.feedsName}</p>
            </div>
          </div>
          <i className="fas fa-ellipsis-h"></i>
        </div>
        <div className="feeds_main_img">
          <img src={this.props.feedsImg} alt="feeds_main_img" />
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
                <span className="feeds_comment_uesrs_id">Jetom</span>님
                <span className="feeds_comment_uesrs_id">외 999명</span>이
                좋아합니다.
              </p>
            </div>
            <div className="feeds_comment_uesrs">
              <p>
                <span className="feeds_comment_uesrs_id">
                  {this.props.feedsUserId}
                </span>
                <span>{this.props.feedsComment}</span>
              </p>
            </div>

            <div className="feeds_comment_uesrs">
              {commentList.map(item => {
                return (
                  <Reply key={item.id} userId={item.userId} txt={item.txt} />
                );
              })}
            </div>

            <p className="feeds_comment_tiem">1분전</p>
          </div>
        </div>
        <div className="comment_input">
          <form>
            <input
              className="comment_input_txt"
              onChange={this.uesrsCommentState}
              value={reply}
              type="text"
              placeholder="댓글 달기..."
            />
            <button
              className="comment_btn"
              onClick={this.uesrsCommentAdd}
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
