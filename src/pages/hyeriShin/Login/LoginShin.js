import React, { Component } from 'react';
import './LoginShin.scss';

class LoginShin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      idInput: '',
      pwInput: '',
      isLoginBtn: false,
    };
  }

  goToMainShin = () => {
    this.props.history.push('/MainShin');
  };

  handleIdInput = e => {
    this.setState({
      idInput: e.target.value,
    });
  };

  handlePwInput = e => {
    this.setState({
      pwInput: e.target.value,
    });
  };

  render() {
    const isLoginBtn =
      this.state.idInput.includes('@') && this.state.pwInput.length >= 5;

    return (
      <div className="loginBody">
        <div className="cotainer">
          <header>
            <h1 className="logo">
              Tomstagram <i className="fas fa-dog"></i>
            </h1>
          </header>

          <section>
            <article>
              <div className="loginBox">
                <form>
                  <input
                    onChange={this.handleIdInput}
                    type="text"
                    placeholder="전화번호, 사용자 이름 또는 이메일"
                    className="loginInput info"
                  />
                  <input
                    onChange={this.handlePwInput}
                    type="password"
                    placeholder="비밀번호"
                    className="loginInput password"
                  />

                  <button
                    className={isLoginBtn ? 'loginBtnOn' : 'loginBtnOff'}
                    disabled={!isLoginBtn}
                    onClick={this.goToMainShin}
                  >
                    로그인
                  </button>
                </form>
              </div>
            </article>
          </section>

          <footer>
            <span class="forget_password">비밀번호를 잊으셨나요?</span>
          </footer>
        </div>
      </div>
    );
  }
}

export default LoginShin;
