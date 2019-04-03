import React from 'react';
import PropTypes from 'prop-types';

import Parcel from './Parcel';
import './styles.scss';

const Parcels = ({ items = [] }) =>  (
  <div className='welcome-box'>
    {!items.length && (
      <div className='flex'>
        <h2 className='text-center'>No Parcel was found</h2>
      </div>
    )}
    {items.map((item) => (<Parcel key={item.parcel_id} {...item} />))}
  </div>
);

Parcels.propTypes = {
  items: PropTypes.array
}

export default Parcels;