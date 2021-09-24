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
          commentList: [
            { commentId: 0, userId: 'kimjis1004', comment: 'hello' },
            { commentId: 1, userId: 'nylee9621', comment: 'bye' },
          ],
        },
        {
          feedId: 1,
          isLike: true,
          isBookmark: true,
          likeNum: 40,
          commentList: [
            { commentId: 0, userId: 'quattro9037', comment: '뭐하니' },
            { commentId: 1, userId: 'nylee9621', comment: '놀아' },
            { commentId: 2, userId: 'quattro9037', comment: '왜 놀아' },
          ],
        },
      ],
    };
  }

  changeLikeNum = (feedId, isLike) => {
    return isLike
      ? this.state.feedList[feedId].likeNum - 1
      : this.state.feedList[feedId].likeNum + 1;
  };

  changeIsLike = (feedId, isLike) => {
    this.setState({
      feedList: this.state.feedList.map(feed =>
        feed.feedId === feedId
          ? {
              feedId: feedId,
              isLike: !this.state.feedList[feedId].isLike,
              isBookmark: this.state.feedList[feedId].isBookmark,
              likeNum: this.changeLikeNum(feedId, isLike),
              commentList: this.state.feedList[feedId].commentList,
            }
          : feed
      ),
    });
  };

  changeIsBookmark = feedId => {
    this.setState({
      feedList: this.state.feedList.map(feed =>
        feed.feedId === feedId
          ? {
              feedId: feedId,
              isLike: this.state.feedList[feedId].isLike,
              isBookmark: !this.state.feedList[feedId].isBookmark,
              likeNum: this.state.feedList[feedId].likeNum,
              commentList: this.state.feedList[feedId].commentList,
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
              feedId: feedId,
              isLike: this.state.feedList[feedId].isLike,
              isBookmark: this.state.feedList[feedId].isBookmark,
              likeNum: this.state.feedList[feedId].likeNum,
              commentList: this.state.feedList[feedId].commentList.concat({
                commentId: this.state.feedList[feedId].commentList.length,
                userId: 'nylee9621',
                comment: comment,
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
                changeIsLike={this.changeIsLike}
                changeIsBookmark={this.changeIsBookmark}
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
