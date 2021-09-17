import React from 'react';
import { Link } from 'react-router-dom';
import './LoginLee.scss';

class LoginLee extends React.Component {
  constructor() {
    super();
    this.state = {
      id: '',
      pw: '',
    };
  }

  handleIdInput = e => {
    this.setState({
      id: e.target.value,
    });
  };

  handlePwInput = e => {
    this.setState({
      pw: e.target.value,
    });
  };

  goToMain = () => {
    this.props.history.push('/mainLee');
  };

  render() {
    console.log(this.state);
    return (
      <div className="LoginLee">
        <h1 className="logo">Westagram</h1>
        <div className="form">
          <input
            type="text"
            placeholder="전화번호, 사용자 이름 또는 이메일"
            onChange={this.handleIdInput}
          />
          <input
            type="password"
            placeholder="비밀번호"
            onChange={this.handlePwInput}
          />
          <button className="button" disabled={true} onClick={this.goToMain}>
            로그인
          </button>
        </div>
        <Link to="/">비밀번호를 잊으셨나요?</Link>
      </div>
    );
  }
}

export default LoginLee;
