import React, { Component } from 'react';
import './LoginKang.scss';
// import '../../../styles/common.scss';
import { Link } from 'react-router-dom';

class LoginKang extends React.Component {
  render() {
    return (
      <div className="Login">
        <form id="login_form" className="container">
          <div className="center first">instagram</div>
          <div>
            <input
              type="text"
              className="id"
              placeholder="전화번호, 사용자 이름 또는 이메일"
            />
          </div>
          <div>
            <input type="password" className="pw" placeholder="비밀번호" />
          </div>

          <button className="login center" disabled="disabled" type="submit">
            <Link to="/MainKang">로그인</Link>
          </button>
          <div className="center pwFind">비밀번호를 잊으셨나요?</div>
        </form>
      </div>
    );
  }
}
export default LoginKang;
