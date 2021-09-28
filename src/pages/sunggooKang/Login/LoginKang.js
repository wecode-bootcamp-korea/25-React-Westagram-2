import React from 'react';
import './LoginKang.scss';
// import { Link } from 'react-router-dom';
import { withRouter } from 'react-router-dom';

class LoginKang extends React.Component {
  constructor() {
    super();
    this.state = {
      id: '',
      pw: '',
      isIdValidation: false,
      isPwValidation: false,
      isBtnOn: false,
      replies: [],
    };
  }

  handleInput = e => {
    const { name, value } = e.target;
    // 1.if(id)
    if (name === 'id') {
      this.setState(
        {
          id: value,
          isIdValidation: value,
        }
        // this.toggleBtn
      );
    } else {
      this.setState(
        {
          pw: value,
          isPwValidation: value,
        }
        // this.toggleBtn
      );
    }

    // 2.  [] -> key dynamic id or pw
  };

  gotoMain = () => {
    const { id, pw } = this.state;
    // 왜 엔터를 한건데 로그인이 된거지????
    id.includes('@') && pw.length >= 5
      ? this.props.history.push('./mainkang')
      : alert('다시입력하세요');
  };

  render() {
    const { id, pw } = this.state;
    const isBtnOn = this.state.id.includes('@') && this.state.pw.length >= 5;
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
          {/* <Link to="/MainKang"> */}
          <button
            className={
              isBtnOn ? 'changeColor login center' : 'normalColor login center'
            }
            // disabled 기능 구현 실패
            disabled={isBtnOn ? false : true}
            onClick={this.gotoMain}
          >
            로그인
          </button>
          {/* </Link> */}
          <div className="center pwFind">비밀번호를 잊으셨나요?</div>
        </form>
      </div>
    );
  }
}
export default withRouter(LoginKang);
