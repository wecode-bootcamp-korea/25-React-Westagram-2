import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './LoginKim.scss';

class LoginKim extends Component {
  checkIdPassword() {
    let id = document.getElementById('user-id');
    let password = document.getElementById('user-password');
    let login = document.getElementById('login');
    let checkString = '@';

    id.value.indexOf(checkString) != -1 && password.value.length > 5
      ? (login.disabled = false)
      : (login.disabled = true);
  }

  goToMain = () => {
    this.props.history.push('/MainKim');
  };

  render() {
    return (
      <div className="Login">
        <div className="wrapper">
          <header>
            <h1>Westagram</h1>
          </header>
          <main>
            <input
              id="user-id"
              type="text"
              placeholder="전화번호,사용자 이름 또는 이메일"
              onKeyUp={this.checkIdPassword}
            />
            <input
              id="user-password"
              type="password"
              placeholder="비밀번호"
              onKeyUp={this.checkIdPassword}
            />
            <Link to="/MainKim">
              <button id="login" disabled>
                로그인
              </button>
            </Link>
          </main>

          <footer>
            <a href="www.naver.com">비밀번호를 잊으셨나요?</a>
          </footer>
        </div>
      </div>
    );
  }
}
export default LoginKim;
