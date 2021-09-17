import React from 'react';
import { Link } from 'react-router-dom';
import './LoginLee.scss';

class LoginLee extends React.Component {
  constructor() {
    super();
    this.state = {
      id: '',
      pw: '',
      isIdValidation: false,
      isPwValidation: false,
      isBtnOn: false,
    };
  }

  handleIdInput = e => {
    this.setState(
      {
        id: e.target.value,
        isIdValidation: this.changeIdValidation(e.target.value),
      },
      this.toggleBtn
    );
  };

  handlePwInput = e => {
    this.setState(
      {
        pw: e.target.value,
        isPwValidation: this.changePwValidation(e.target.value),
      },
      this.toggleBtn
    );
  };

  changeIdValidation = id => {
    const regId = /^[a-z]+[a-z0-9]{5,19}$/;
    const regEmail =
      /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i;
    const regPnum = /^01([0|1|6|7|8|9]?)-?([0-9]{3,4})-?([0-9]{4})$/;
    return regId.test(id) || regEmail.test(id) || regPnum.test(id);
  };

  changePwValidation = pw => {
    const regPw = /^(?=.*\d)(?=.*[a-zA-Z])[0-9a-zA-Z]{8,16}$/;
    return regPw.test(pw);
  };

  toggleBtn = () => {
    this.setState({
      isBtnOn: this.state.isIdValidation && this.state.isPwValidation,
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
          <button
            className={this.state.isBtnOn ? 'active' : ''}
            disabled={!this.state.isBtnOn}
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
