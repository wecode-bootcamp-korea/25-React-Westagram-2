import React from 'react';
import { Link } from 'react-router-dom';
import './LoginLee.scss';

class LoginLee extends React.Component {
  goToMain = () => {
    this.props.history.push('/mainLee');
  };

  render() {
    return (
      <div className="Login">
        <h1 className="login-logo">Westagram</h1>
        <div className="login-form">
          <input
            className="login-id"
            type="text"
            placeholder="전화번호, 사용자 이름 또는 이메일"
          />
          <input
            className="login-password"
            type="password"
            placeholder="비밀번호"
          />
          <button
            className="login-button"
            disabled={true}
            onClick={this.goToMain}
          >
            로그인
          </button>
        </div>
        <Link to="/">비밀번호를 잊으셨나요?</Link>
      </div>
    );
  }
}

export default LoginLee;
