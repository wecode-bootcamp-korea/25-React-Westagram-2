import React from 'react';
import Navbar from './Navbar/Navbar';
import Feed from './Feed/Feed';
import Aside from './Aside/Aside';
import './MainLee.scss';

class MainLee extends React.Component {
  render() {
    return (
      <div className="MainLee">
        <Navbar />
        <main>
          <div className="feeds">
            <Feed />
            <Feed />
          </div>
          <Aside />
        </main>
      </div>
    );
  }
}

export default MainLee;
