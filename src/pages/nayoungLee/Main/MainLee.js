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
        { id: 0, commentList: ['a', 'a'] },
        { id: 1, commentList: ['b', 'b', 'b'] },
      ],
    };
  }

  submitComment = (comment, id) => {
    this.setState({
      feedList: this.state.feedList.map(feed =>
        feed.id === id
          ? {
              id: feed.id,
              commentList: this.state.feedList[id].commentList.concat(comment),
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
                key={feed.id}
                id={feed.id}
                commentList={feed.commentList}
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
