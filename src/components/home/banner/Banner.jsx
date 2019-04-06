import React from 'react';

import './styles.scss';

const Banner = () => (
  <div id="banner">
    <div className="intro w-60 mx-auto text-center">
      <h1 className="white p-1 mt-0">SendIT is the #1 courier service that helps users deliver parcels to different
        destinations all across the country.</h1>
      <a href='#content' className="purple-btn">Get Started</a>
    </div>
  </div>
);

export default Banner;