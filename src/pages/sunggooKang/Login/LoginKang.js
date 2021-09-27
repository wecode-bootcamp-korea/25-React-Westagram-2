import React from 'react';
import './LoginKang.scss';
import { Link } from 'react-router-dom';
import { configs } from 'eslint-plugin-prettier';

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
    // this.setState({
    //   this.state.id === id ?
    // })
  };

  // handleInput2 = e => {
  //   this.setState({
  //     pw: e.target.value,
  //   });
  // };

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
            onChange={this.handleInput} // 타이핑할때마다
            value={this.state.id} // 여기에 집어넣음
          />

          <input
            name="pw"
            type="password"
            className="pw"
            placeholder="비밀번호"
            onChange={this.handleInput}
            value={this.state.pw}
          />

          <button className="login center" disabled="disabled" type="submit">
            <Link to="/MainKang">로그인</Link>
          </button>

          <div className="center pwFind">비밀번호를 잊으셨나요?</div>
        </form>
      </div>
    );
  }
}
export default LoginKang;
