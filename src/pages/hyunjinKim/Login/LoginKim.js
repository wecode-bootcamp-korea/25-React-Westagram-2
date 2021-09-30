import React, { Component } from 'react';
import './LoginKim.scss';

class LoginKim extends Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: '',
    };
  }

  handleInput = e => {
    const { value, name } = e.target;
    this.setState({
      [name]: value,
    });
  };

  isValidIdAndPassword = (email, password) => {
    return !(this.state.email.includes('@') && this.state.password.length > 5);
  };

  login = () => {
    fetch('http://10.58.6.202:8000/users/login/', {
      method: 'POST',
      body: JSON.stringify({
        email: this.state.email,
        password: this.state.password,
      }),
    })
      .then(response => response.json())
      .then(result => {
        if (result.message === 'INVALID_USER') {
          alert('비밀번호가 올바르지 않습니다!');
        } else {
          alert('로그인 성공!');
        }
      });
  };

  goToMain = () => {
    this.props.history.push('/MainKim');
  };

  handleLogin = () => {
    this.login();
    this.goToMain();
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
              name="email"
              type="text"
              placeholder="전화번호,사용자 이름 또는 이메일"
              onChange={this.handleInput}
            />
            <input
              id="user-password"
              name="password"
              type="password"
              placeholder="비밀번호"
              onChange={this.handleInput}
            />

            <button
              id="login"
              onClick={this.handleLogin}
              disabled={this.isValidIdAndPassword()}
            >
              로그인
            </button>
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
