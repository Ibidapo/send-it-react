import React from 'react';
import PropTypes from 'prop-types';

import './styles.scss';

const TabContents = ({ children, id }) => {
  return (
    <div className='tab-contents-area' id={id}>
      {children}
    </div>
  );
}

TabContents.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired,
  id: PropTypes.string
};

export default TabContents;