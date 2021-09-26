import React, { Component } from 'react';
import './MainKim.scss';
import '../../../styles/common.scss';
import '../../../styles/reset.scss';
import Aside from './Aside/Aside';
import Feed from './Feeds/Feed';
import Nav from './Nav/Nav';
import '@fortawesome/fontawesome-free/js/all.js';

class MainKim extends Component {
  state = {
    recommands: [
      {
        id: 1,
        userId: '2arrr',
        src: '/images/hyunjinKim/hodu.jpeg',
        aboutme: '호두래요',
      },
      {
        id: 2,
        userId: 'so5raa',
        src: '/images/hyunjinKim/ggongggong.jpeg',
        aboutme: '꿍꿍이 엄마',
      },
      {
        id: 3,
        userId: 'imdede',
        src: '/images/hyunjinKim/dede.jpeg',
        aboutme: '데데에용 잘부탁^^!',
      },
      {
        id: 4,
        userId: 'golden',
        src: '/images/hyunjinKim/golden.jpeg',
        aboutme: '골댕이 김몽충',
      },
      {
        id: Date.now(),
        userId: 'sundaymorning',
        src: '/images/hyunjinKim/sun.jpeg',
        aboutme: '내일의 해가 뜬당',
      },
    ],
  };
  handleDelete = reply => {
    const replys = this.state.replys.filter(item => item.id !== reply.id);
    this.setState({ replys });
  };
  render() {
    return (
      <div className="Main">
        <div className="total-wrapper">
          <Nav />
          <div className="main-wrapper">
            <main>
              <div className="feeds-wrapper">
                <Feed replys={this.state.replys} />
              </div>
              <Aside recommands={this.state.recommands} />
            </main>
          </div>
        </div>
      </div>
    );
  }
}
export default MainKim;
