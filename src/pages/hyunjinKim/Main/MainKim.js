import React, { Component } from 'react';
import './MainKim.scss';
import '../../../styles/common.scss';
import '../../../styles/reset.scss';
import Aside from './Aside/Aside';
import Nav from './Nav/Nav';
import '@fortawesome/fontawesome-free/js/all.js';
import Feeds from './Feeds/Feeds';

class MainKim extends Component {
  constructor() {
    super();
    this.state = {
      feeds: [],
      recommands: [],
    };
  }

  componentDidMount() {
    fetch('http://localhost:3000/data/feedData.json', {
      method: 'GET',
    })
      .then(res => res.json())
      .then(data => {
        this.setState({
          feeds: data,
        });
      });

    fetch('http://localhost:3000/data/recommandData.json', {
      method: 'GET',
    })
      .then(res => res.json())
      .then(data => {
        this.setState({
          ...this.state,
          recommands: data,
        });
      });
  }

  handleDelete = reply => {
    const replys = this.state.replys.filter(item => item.id !== reply.id);
    this.setState({ replys });
  };
  render() {
    return (
      <div className="Main">
        <div className="total-wrapper">
          <Nav />
          <div className="main-wrapper">
            <main>
              <div className="feeds-wrapper">
                <Feeds feeds={this.state.feeds} />
              </div>
              <Aside recommands={this.state.recommands} />
            </main>
          </div>
        </div>
      </div>
    );
  }
}
export default MainKim;
