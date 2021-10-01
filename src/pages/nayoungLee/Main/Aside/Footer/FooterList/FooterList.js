import React from 'react';
import { Link } from 'react-router-dom';
import './FooterList.scss';

class FooterList extends React.Component {
  render() {
    return (
      <li className="FooterList">
        <Link to="">{this.props.name}</Link>
      </li>
    );
  }
}

export default FooterList;
