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
  //로그인 버튼 클릭시 MainHa 페이지로 가게 해주는 함수
  goToMain = () => {
    this.props.history.push('/mainHa');
  };
  // 인풋에 입력된 아이디, 비번 텍스트 값을 state 로 저장 해주는 함수
  handleIdInput = event => {
    const { id, pw } = this.state;
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
    // validation process 를 handleIdInput 함수에 합쳐줬음
    id.includes('@') && pw.length >= 5
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
                    name="id"
                    value={id}
                    onChange={this.handleIdInput}
                  />
                </div>
                <div className="input-wrap">
                  {/*비밀번호가 입력될 인풋바 하나를 감싸는 wrapper div, descendant of login-bar*/}
                  <input
                    type="password"
                    placeholder="비밀번호"
                    name="pw"
                    value={pw}
                    onChange={this.handleIdInput}
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
