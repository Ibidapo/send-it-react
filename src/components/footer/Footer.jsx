import React from 'react';

import './styles.scss';

const Footer = () => (
  <footer className="d-flex space-evenly text-center pt-2" id="contact">
    <div className="w-40 py-2">
      <h4 className="mt-0 mb-1">Address:</h4>
        EPIC Towers,<br/>
        Lagos,<br/>
        Nigeria.
    </div>
    <div className="w-40 py-2">
      <h4 className="mt-0 mb-1">Contact:</h4>
        Phone: 080-send-it<br/>
        Email: sendit@gmail.com<br/>
        Website: www.sendit.com
    </div>
    <div className="w-60 text-center mt-1">
      <p>© SendIT 2018 | Terms & Conditions | Privacy Policy</p>
    </div>
  </footer>
);

export default Footer;