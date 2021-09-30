import React from 'react';
import './LoginKang.scss';
// import { Link } from 'react-router-dom';
import { withRouter } from 'react-router-dom';
// import { restElement } from '@babel/types';

class LoginKang extends React.Component {
  constructor() {
    super();
    this.state = {
      id: '',
      pw: '',
      isBtnOn: false,
      replies: [],
    };
  }

  handleInput = e => {
    const { name, value } = e.target;
    // const { id, pw } = this.state;

    if (name === 'id') {
      this.setState({
        id: value,
      });
    } else {
      this.setState({
        pw: value,
      });
    }
  };

  // api주소 받고
  // body안의 아이디,비번의 키값 정하고,
  // then...
  gotoMain = () => {
    const isValid = this.state.id.includes('@') && this.state.pw.length >= 8;
    if (!isValid) {
      // 조건 맞지 않으면 그냥 함수 나가버려라
      return;
    }
    // 조건 맞으면 아래코드를 시행하라

    // isValid
    //   ? this.props.history.push('./mainkang')
    //   : this.props.history.push('./loginkang');

    fetch('http://10.58.5.94:8000/users/signin', {
      method: 'POST',
      body: JSON.stringify({
        email: this.state.id,
        password: this.state.pw,
        // name: this.state.pw, // 왜 안될까
        // other_info: this.state.pw,
        // phone_number: this.state.pw,
      }),
    }).then(response => {
      response.json();
      console.log(response);
      this.props.history.push('./mainkang');
    });

    // .then(result => {
    //   if (result.MESSAGE === 'EMAIL_ALREADY_EXISTS') {
    //     console.log('결과 : ', result);
    //     alert('이미 존재하는 아이디입니다.');
    //   } else if (result.MESSAGE === 'SUCCESS') {
    //     console.log('결과 : ', result);
    //     alert('성공!!');
    //   }

    //   //
    // });
  };

  render() {
    const { id, pw } = this.state;
    const isBtnOn = this.state.id.includes('@') && this.state.pw.length >= 8;
    return (
      <div className="Login">
        <form id="login_form" className="container">
          <div className="center first">instagram</div>
          <input
            name="id"
            type="text"
            className="id"
            placeholder="전화번호, 사용자 이름 또는 이메일"
            onChange={this.handleInput}
            value={id}
          />
          <input
            name="pw"
            type="password"
            className="pw"
            placeholder="비밀번호"
            onChange={this.handleInput}
            value={pw}
          />

          <button
            className={
              isBtnOn ? 'changeColor login center' : 'normalColor login center'
            }
            // disabled 기능 구현 실패
            // disabled={!isBtnOn} // 감사
            type="button"
            onClick={this.gotoMain} // 여기서 fetch함수를 작성
          >
            로그인
          </button>

          <div className="center pwFind">비밀번호를 잊으셨나요?</div>
        </form>
      </div>
    );
  }
}
export default withRouter(LoginKang);
