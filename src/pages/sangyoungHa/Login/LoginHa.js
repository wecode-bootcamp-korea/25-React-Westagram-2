import React, { Component } from 'react';
import './LoginHa.scss';
//import '../../../styles/common.scss';
//import '../../../styles/reset.scss';
//import {Link} from "react-router-dom";
import { withRouter } from 'react-router-dom';

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
    id.includes('@') && pw.length >= 4
      ? this.setState({ isValid: true })
      : this.setState({ isValid: false });
  };

  render() {
    const { id, pw, isValid } = this.state;

    return (
      <>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width" />
        <title>westagram</title>
        <link href="login.css" rel="stylesheet" type="text/css" />
        <div>
          <div className="Login">
            <div className="big-box">
              {/*로그인 창의 해당 content 전체를 감싸는 big-box div*/}

              <div className="westa">
                {/*로고가 들어갈 westa div, descendant of big-box div*/}
                <img
                  alt="westagram logo"
                  src="/images/sangyoungHa/westa1.png"
                />
              </div>
              <div className="login-bar">
                {/*로그인 을 위한 두개의 인풋바를 login-bar div, descendant of big-box div*/}
                <div className="input-wrap">
                  {/*전화번호, 사용자 이름 또는 이메일이 입력될 인풋바 하나를 감싸는 wrapper div, descendant of login-bar*/}
                  <input
                    type="text"
                    placeholder="전화번호, 사용자 이름 또는 이메일"
                    onChange={this.handleIdInput}
                    name="id"
                    value={id}
                  />
                </div>
                <div className="input-wrap">
                  {/*비밀번호가 입력될 인풋바 하나를 감싸는 wrapper div, descendant of login-bar*/}
                  <input
                    type="password"
                    placeholder="비밀번호"
                    onChange={this.handleIdInput}
                    name="pw"
                    value={pw}
                  />
                </div>
              </div>
              <div className="button-div">
                {/*로그인 버튼바가 들어갈 div, descendant of big-box div*/}
                {/*<Link to="/Main"><button id="asd" type="button" >
            로그인{" "}
          </button></Link>*/}
                <button
                  className={isValid ? 'validated' : 'unvalidated'}
                  onClick={this.goToMain}
                >
                  로그인
                </button>
              </div>
              <p>
                <a>비밀번호를 잊어버리셨나요?</a>
              </p>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default LoginHa;
