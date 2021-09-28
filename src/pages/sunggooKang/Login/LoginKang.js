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
      replies: [],
    };
  }

  handleInput = e => {
    // 1.if(id)
    if (e.target.name === 'id') {
      this.setState({
        id: e.target.value,
      });
    } else {
      this.setState({
        pw: e.target.value,
      });
    }

    // 2.  [] -> key dynamic id or pw
  };

  gotoMain = () => {
    // 왜 엔터를 한건데 로그인이 된거지????
    this.state.id.includes('@') && this.state.pw.length >= 5
      ? this.props.history.push('./mainkang')
      : alert('다시입력하세요');
  };

  render() {
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
            value={this.state.id}
          />
          <input
            name="pw"
            type="password"
            className="pw"
            placeholder="비밀번호"
            onChange={this.handleInput}
            value={this.state.pw}
          />
          {/* <Link to="/MainKang"> */}
          <button
            className={
              this.state.id.includes('@') && this.state.pw.length >= 5
                ? 'changeColor login center'
                : 'normalColor login center'
            }
            // disabled 기능 구현 실패
            // disabled={
            //   this.state.id.includes('@') && this.state.pw.length >= 5
            //     ? 'false'
            //     : 'true'
            // }
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
