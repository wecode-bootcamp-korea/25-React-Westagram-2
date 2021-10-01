import React from 'react';
import { Link } from 'react-router-dom';
import './LoginLee.scss';

class LoginLee extends React.Component {
  constructor() {
    super();
    this.state = {
      id: '',
      pw: '',
      isBtnOn: false,
    };
  }

  handleInput = e => {
    const { name, value } = e.target;

    this.setState(
      {
        [name]: value,
      },
      this.toggleBtn
    );
  };

  toggleBtn = () => {
    this.setState({
      isBtnOn: this.isIdValidation() && this.isPwValidation(),
    });
  };

  isIdValidation = () => {
    const { id } = this.state;

    const regId = /^[a-z]+[a-z0-9]{5,19}$/;
    const regEmail =
      /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i;
    const regPnum = /^01([0|1|6|7|8|9])-?([0-9]{3,4})-?([0-9]{4})$/;

    return regId.test(id) || regEmail.test(id) || regPnum.test(id);
  };

  isPwValidation = () => {
    const { pw } = this.state;

    const regPw = /^(?=.*\d)(?=.*[a-zA-Z])[0-9a-zA-Z]{8,16}$/;

    return regPw.test(pw);
  };

  goToMain = () => {
    this.props.history.push('/mainLee');
  };

  handleClickBtn = () => {
    fetch('http://10.58.3.221:8000/users/signin', {
      method: 'POST',
      body: JSON.stringify({ email: this.state.id, password: this.state.pw }),
    })
      .then(res => res.json())
      .then(res => {
        if (res.token) {
          localStorage.setItem('token', res.token);
          this.goToMain();
        } else {
          alert('로그인 실패');
        }
      });
  };

  handlePressEnter = e => {
    if (e.key === 'Enter' && this.state.isBtnOn) {
      this.handleClickBtn();
    }
  };

  render() {
    const { isBtnOn } = this.state;

    return (
      <div className="LoginLee">
        <h1 className="logo">Westagram</h1>
        <div className="form">
          <input
            type="text"
            name="id"
            placeholder="전화번호, 사용자 이름 또는 이메일"
            onChange={this.handleInput}
            onKeyPress={this.handlePressEnter}
          />
          <input
            type="password"
            name="pw"
            placeholder="비밀번호"
            onChange={this.handleInput}
            onKeyPress={this.handlePressEnter}
          />
          <button
            className={isBtnOn ? 'active' : ''}
            disabled={!isBtnOn}
            onClick={this.handleClickBtn}
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
