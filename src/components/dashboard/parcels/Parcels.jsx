import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown, faTimes, faPencilAlt } from '@fortawesome/free-solid-svg-icons';

import './styles.scss';

const Parcels = () => {
  return (
    <div className="box py-1 my-1">
      <div className="parcel-box d-flex space-evenly mx-auto">
        <div className="w-20">Order: <b># 213</b></div>
        <div className="w-20">Status: <b>Transit</b></div>
        <div className="w-20">Quote: <b>&#8358; 3202</b></div>
        <div className="w-20"><span>16/04/2019</span></div>
        <div className="w-20 d-flex space-between">
          <button title="Cancel Order" className="icon">
            <FontAwesomeIcon icon={faTimes} color='#ff0000' />
          </button>
          <button title="Edit Order" className="icon">
            <FontAwesomeIcon icon={faPencilAlt} color='#0000ff' />
          </button>
          <button title="View Order" className="icon">
            <FontAwesomeIcon icon={faCaretDown} color='#008000' />
          </button>
        </div>
        <div className="w-100 parcel-info my-1 mx-auto text-left">
          <div className="w-100 d-flex space-between">
            <div className="w-100"><h4 className="my-0">From</h4></div>
            <div className="w-60 mt-05"><span>Address:</span> <b></b></div>
            <div className="w-30 mt-05"><span>Weight:</span> <b></b></div>
          </div>
          <div className="w-100 d-flex space-between">
            <div className="w-100"><h4 className="mt-1 mb-0">To</h4></div>
            <div className="w-60 mt-05">
              <span>Address:</span> <b></b>
              <input type="text" value="" />
            </div>
            <div className="w-30 mt-05"><span>Tel:</span> <b></b></div>
          </div>
          <div className="w-100">
            <div className="w-40 mt-05"><span>Present Location:</span> <b></b></div>
            <div className="w-100 mt-1 text-center">
              <button className='form-button'>save</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Parcels;