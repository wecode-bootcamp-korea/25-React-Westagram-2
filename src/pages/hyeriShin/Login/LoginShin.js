import React, { Component } from 'react';
import './LoginShin.scss';

class LoginShin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      idInput: '',
      pwInput: '',
      name: 'jetom',
      phone_number: '010-0408-1111',
      gender: 'Male',
    };
  }

  goToMainShin = e => {
    const { idInput, pwInput, name, phone_number, gender } = this.state;

    e.preventDefault();

    fetch('http://10.58.3.243:8000/users/login', {
      method: 'POST',
      body: JSON.stringify({
        email: idInput,
        password: pwInput,
        name: name,
        phone_number: phone_number,
        gender: gender,
      }),
    })
      .then(response => response.json())
      .then(result => console.log('결과: ', result));
    // this.props.history.push('/MainShin');
  };

  handleInput = e => {
    const { value, name } = e.target;
    this.setState({
      [name]: value,
    });
  };

  render() {
    const isLoginBtn =
      this.state.idInput.includes('@') && this.state.pwInput.length >= 5;
    const { handleInput, goToMainShin } = this;

    return (
      <div className="loginBody">
        <div className="container">
          <header>
            <h1 className="logo">
              Tomstagram <i className="fas fa-dog"></i>
            </h1>
          </header>

          <section>
            <article>
              <div className="loginBox">
                <form onSubmit={goToMainShin}>
                  <input
                    name="idInput"
                    onChange={handleInput}
                    placeholder="전화번호, 사용자 이름 또는 이메일"
                    className="loginInput info"
                  />
                  <input
                    name="pwInput"
                    onChange={handleInput}
                    type="password"
                    placeholder="비밀번호"
                    className="loginInput password"
                  />

                  <button
                    className={isLoginBtn ? 'loginBtn on' : 'loginBtn off'}
                    disabled={!isLoginBtn}
                    // onClick={goToMainShin}
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
