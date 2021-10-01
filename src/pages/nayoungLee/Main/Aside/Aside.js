import React from 'react';
import { Link } from 'react-router-dom';
import Recommend from './Recommend/Recommend';
import Footer from './Footer/Footer';
import './Aside.scss';

class Aside extends React.Component {
  render() {
    return (
      <aside className="Aside">
        <div className="me-profile">
          <Link to="">
            <img
              className="profile-image"
              alt="내 프로필 사진"
              src="/images/nayoungLee/망붕배경.jpg"
            />
          </Link>
          <div className="me-nametag nametag">
            <span>
              <Link className="id non-hover-id" to="">
                nylee9621
              </Link>
            </span>
            <span className="name">이나영</span>
          </div>
          <button className="me-change-button">전환</button>
        </div>
        <Recommend />
        <Footer />
      </aside>
    );
  }
}

export default Aside;
