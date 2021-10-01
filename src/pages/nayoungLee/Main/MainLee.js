import React from 'react';
import Navbar from './Navbar/Navbar';
import Feed from './Feed/Feed';
import Aside from './Aside/Aside';
import './MainLee.scss';

class MainLee extends React.Component {
  constructor() {
    super();
    this.state = {
      feedList: [],
    };
  }

  componentDidMount() {
    fetch('http://localhost:3000/data/feedData.json', {
      method: 'GET',
    })
      .then(res => res.json())
      .then(data => {
        this.setState({ feedList: data });
      });
  }

  upDownLikeNum = (feedId, isLike) => {
    const { likeNum } = this.state.feedList[feedId - 1];

    return isLike ? likeNum - 1 : likeNum + 1;
  };

  toggleIsLike = (feedId, isLike) => {
    this.setState({
      feedList: this.state.feedList.map(feed =>
        feed.feedId === feedId
          ? {
              ...feed,
              isLike: !feed.isLike,
              likeNum: this.upDownLikeNum(feedId, isLike),
            }
          : feed
      ),
    });
  };

  toggleIsBookmark = feedId => {
    this.setState({
      feedList: this.state.feedList.map(feed =>
        feed.feedId === feedId
          ? {
              ...feed,
              isBookmark: !feed.isBookmark,
            }
          : feed
      ),
    });
  };

  deleteComment = (feedId, commentId) => {
    this.setState({
      feedList: this.state.feedList.map(feed => {
        if (feed.feedId !== feedId) return feed;

        const filterComment = comment => comment.commentId !== commentId;
        const nextComments = feed.commentList.filter(filterComment);
        return { ...feed, commentList: nextComments };
      }),
    });
  };

  toggleCommentIsLike = (feedId, commentId) => {
    this.setState({
      feedList: this.state.feedList.map(feed =>
        feed.feedId === feedId
          ? {
              ...feed,
              commentList: feed.commentList.map(comment =>
                comment.commentId === commentId
                  ? {
                      ...comment,
                      isLike: !comment.isLike,
                    }
                  : comment
              ),
            }
          : feed
      ),
    });
  };

  submitComment = (feedId, comment) => {
    this.setState({
      feedList: this.state.feedList.map(feed =>
        feed.feedId === feedId
          ? {
              ...feed,
              commentIdCounting: feed.commentIdCounting + 1,
              commentList: feed.commentList.concat({
                commentId: feed.commentIdCounting + 1,
                userId: 'nylee9621',
                comment: comment,
                isLike: false,
              }),
            }
          : feed
      ),
    });
  };

  render() {
    return (
      <div className="MainLee">
        <Navbar />
        <main>
          <div className="feeds">
            {this.state.feedList.map(feed => (
              <Feed
                key={feed.feedId}
                feedId={feed.feedId}
                isLike={feed.isLike}
                isBookmark={feed.isBookmark}
                likeNum={feed.likeNum}
                commentList={feed.commentList}
                toggleIsLike={this.toggleIsLike}
                toggleIsBookmark={this.toggleIsBookmark}
                deleteComment={this.deleteComment}
                toggleCommentIsLike={this.toggleCommentIsLike}
                submitComment={this.submitComment}
              />
            ))}
          </div>
          <Aside />
        </main>
      </div>
    );
  }
}

export default MainLee;
