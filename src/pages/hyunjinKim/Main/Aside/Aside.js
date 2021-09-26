import React, { Component } from 'react';
import MyProfile from './MyProfile';
import Recommand from './Recommand/Recommand';

class Aside extends Component {
  render() {
    return (
      <div className="main-right">
        <div className="recommend">
          <MyProfile />
          <div className="recommend-title">회원님을 위한 추천</div>
          {this.props.recommands.map(recommand => (
            <Recommand
              key={recommand.id}
              recommand={recommand}
              userId={recommand.userId}
              src={recommand.src}
              aboutme={recommand.aboutme}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default Aside;
