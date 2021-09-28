import React, { Component } from 'react';
import Feed from './Feed';
class Feeds extends Component {
  render() {
    return (
      <>
        {this.props.feeds.map(feed => (
          <Feed
            key={feed.nickname}
            feed={feed}
            nickname={feed.nickname}
            userLocation={feed.userLocation}
            subjectImage={feed.subjectImage}
            content={feed.content}
          />
        ))}
      </>
    );
  }
}

export default Feeds;
