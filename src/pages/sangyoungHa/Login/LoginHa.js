import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import './LoginHa.scss';

class LoginHa extends React.Component {
  constructor() {
    super();
    this.state = {
      id: '',
      pw: '',
      isValid: false,
    };
  }

  goToMain = () => {
    this.props.history.push('/mainHa');
  };

  handleIdInput = event => {
    const { id, pw } = this.state;
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });

    this.setState({
      [name]: value,
      isValid: id.includes('@') && pw.length >= 5,
    });
  };
  // handleClick = () => {
  //   fetch('http://10.58.3.243:8000/users/login', {
  //     method: 'POST',
  //     body: JSON.stringify({
  //       email: this.state.id,
  //       password: this.state.pw,
  //       // name: this.state.name,
  //       // phone_number: this.state.phone_number,
  //       // gender: this.state.gender,
  //     }),
  //   })
  //     .then(response => response.json())
  //     .then(result => console.log('결과: ', result));
  // };

  render() {
    const { id, pw, isValid } = this.state;
    const { handleIdInput, goToMain } = this;
    return (
      <>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width" />
        <title>westagram</title>
        <link href="login.css" rel="stylesheet" type="text/css" />
        <div>
          <div className="Login">
            <div className="big-box">
              <div className="westa">
                <img
                  alt="westagram logo"
                  src="/images/sangyoungHa/westa1.png"
                />
              </div>
              <div className="login-bar">
                <div className="input-wrap">
                  <input
                    type="text"
                    placeholder="전화번호, 사용자 이름 또는 이메일"
                    name="id"
                    value={id}
                    onChange={handleIdInput}
                  />
                </div>
                <div className="input-wrap">
                  <input
                    type="password"
                    placeholder="비밀번호"
                    name="pw"
                    value={pw}
                    onChange={handleIdInput}
                  />
                </div>
              </div>
              <div className="button-div">
                {/*<Link to="/Main"><button id="asd" type="button" >
            로그인{" "}
          </button></Link>*/}
                <button
                  className={isValid ? 'validated' : 'unvalidated'}
                  onClick={goToMain}
                >
                  로그인
                </button>
              </div>
              <p>
                <p>비밀번호를 잊어버리셨나요?</p>
              </p>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default LoginHa;
