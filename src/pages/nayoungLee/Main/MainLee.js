import React from 'react';
import Navbar from './Navbar/Navbar';
import Feed from './Feed/Feed';
import Aside from './Aside/Aside';
import './MainLee.scss';

class MainLee extends React.Component {
  constructor() {
    super();
    this.state = {
      feedList: [
        {
          feedId: 0,
          isLike: false,
          isBookmark: false,
          likeNum: 7,
          commentIdCounting: 2,
          commentList: [
            {
              commentId: 0,
              userId: 'kimjis1004',
              comment: 'hello',
              isLike: true,
            },
            {
              commentId: 1,
              userId: 'nylee9621',
              comment: 'bye bye',
              isLike: true,
            },
          ],
        },
        {
          feedId: 1,
          isLike: true,
          isBookmark: true,
          likeNum: 40,
          commentIdCounting: 3,
          commentList: [
            {
              commentId: 0,
              userId: 'quattro9037',
              comment: '뭐하니',
              isLike: false,
            },
            {
              commentId: 1,
              userId: 'nylee9621',
              comment: '놀아',
              isLike: false,
            },
            {
              commentId: 2,
              userId: 'quattro9037',
              comment: '왜 놀아',
              isLike: true,
            },
          ],
        },
      ],
    };
  }

  upDownLikeNum = (feedId, isLike) => {
    const { likeNum } = this.state.feedList[feedId];

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
      feedList: this.state.feedList.map(feed =>
        feed.feedId === feedId
          ? {
              ...feed,
              commentList: feed.commentList.filter(
                comment => comment.commentId !== commentId
              ),
            }
          : feed
      ),
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
                commentId: feed.commentIdCounting,
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
