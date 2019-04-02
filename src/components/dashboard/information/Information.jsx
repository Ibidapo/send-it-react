import React from 'react';

import './styles.scss';

const Information = () => (
  <div className="welcome-box">
    <h3 className="text-center">My Dashboard</h3>
    <div className="d-flex space-evenly w-90 mx-auto">
      <div className="dashboard-box my-1 text-center">
        <div>0</div>
        <p>All Orders</p>
      </div>
      <div className="dashboard-box my-1 text-center">
        <div>0</div>
        <p>Pending Orders</p>
      </div>
      <div className="dashboard-box my-1 text-center">
        <div>0</div>
        <p>Cancelled Orders</p>
      </div>
      <div className="dashboard-box my-1 text-center">
        <div>0</div>
        <p>Delivered Orders</p>
      </div>
    </div>
  </div>
);

export default Information;