import React, { Component } from 'react';
import './LoginShin.scss';

class LoginShin extends Component {
  goToMainShin = () => {
    this.props.history.push('/MainShin');
  };

  render() {
    return (
      <div className="loginBody">
        'test'
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
                    type="text"
                    placeholder="전화번호, 사용자 이름 또는 이메일"
                    className="loginInput info"
                  />
                  <input
                    type="password"
                    placeholder="비밀번호"
                    className="loginInput password"
                  />

                  <button className="loginBtn" onClick={this.goToMainShin}>
                    로그인
                  </button>
                </form>
              </div>
            </article>
          </section>

          <footer>
            {/* <a href="#" target="_blank" class="forget_password">비밀번호를 잊으셨나요?</a> */}
          </footer>
        </div>
      </div>
    );
  }
}

export default LoginShin;
