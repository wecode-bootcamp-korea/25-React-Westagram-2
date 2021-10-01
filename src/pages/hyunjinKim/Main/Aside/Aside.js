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
        <ul className="instagram">
          {INFO_LIST.map(listData => {
            return (
              <li className="moreInfo">
                <a href={listData.link}> {listData.content}</a>
              </li>
            );
          })}
          <p className="moreInfo"> 2021 INSTAGRAM FROM FACEBOOK</p>
        </ul>
      </div>
    );
  }
}
const INFO_LIST = [
  {
    link: 'https://www.instagram.com/',
    content: '소개',
  },
  {
    link: 'https://www.instagram.com/',
    content: '도움말',
  },
  {
    link: 'https://www.instagram.com/',
    content: '홍보 센터',
  },
  {
    link: 'https://www.instagram.com/',
    content: 'API',
  },
  {
    link: 'https://www.instagram.com/',
    content: '채용정보',
  },
  {
    link: 'https://www.instagram.com/',
    content: '개인정보처리방침',
  },
  {
    link: 'https://www.instagram.com/',
    content: '약관',
  },
  {
    link: 'https://www.instagram.com/',
    content: '위치',
  },
  {
    link: 'https://www.instagram.com/',
    content: '인기 계정',
  },
  {
    link: 'https://www.instagram.com/',
    content: '해시태그',
  },
  {
    link: 'https://www.instagram.com/',
    content: '언어',
  },
];

export default Aside;
