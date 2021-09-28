import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './LoginKim.scss';

class LoginKim extends Component {
  constructor() {
    super();
    this.state = {
      id: '',
      pw: '',
    };
  }

  handleInput = e => {
    const { value, name } = e.target;
    this.setState({
      [name]: value,
    });
  };

  goToMain = () => {
    this.props.history.push('/MainKim');
  };

  render() {
    const isValidIdAndPassword = (id, pw) => {
      return !(
        this.state.id.includes('@') === true && this.state.pw.length > 5
      );
    };

    return (
      <div className="Login">
        <div className="wrapper">
          <header>
            <h1>Westagram</h1>
          </header>
          <main>
            <input
              id="user-id"
              name="id"
              type="text"
              placeholder="전화번호,사용자 이름 또는 이메일"
              onChange={this.handleInput}
            />
            <input
              id="user-password"
              name="pw"
              type="password"
              placeholder="비밀번호"
              onChange={this.handleInput}
            />
            <Link to="/MainKim">
              <button id="login" disabled={isValidIdAndPassword()}>
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
