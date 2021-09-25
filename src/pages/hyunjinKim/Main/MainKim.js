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
    replys: [
      { id: 1, userId: '71summernight', comment: '뭉치 넘 귀여워' },
      { id: 2, userId: '2arrr', comment: '뭉치 잘지내?' },
      { id: 3, userId: 'so5raa', comment: '헉 반함' },
    ],
  };
  handleDelete = reply => {
    console.log(`handleDelte ${reply.userId}`);
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
                <Feed />
              </div>
              <Aside />
            </main>
          </div>
        </div>
      </div>
    );
  }
}
export default MainKim;
