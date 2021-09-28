import React from 'react';
import FooterList from './FooterList/FooterList';
import FOOTER_LIST from './footerData';
import './Footer.scss';

class Footer extends React.Component {
  render() {
    return (
      <footer className="Footer">
        <ul>
          {FOOTER_LIST.map(li => (
            <FooterList key={li.id} name={li.name} />
          ))}
        </ul>
        <span>© 2021 Westagram from Wecode</span>
      </footer>
    );
  }
}

export default Footer;
