import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import './styles.scss';

const Information = ({ parcels }) => (
  <div className="welcome-box">
    <h3 className="text-center">My Dashboard</h3>
    <div className="d-flex space-evenly w-90 mx-auto">
      <div className="dashboard-box my-1 text-center">
        <div>{parcels.length}</div>
        <p>All Orders</p>
      </div>
      <div className="dashboard-box my-1 text-center">
        <div>{parcels.filter(({ status }) => status === 'In Transit').length}</div>
        <p>Pending Orders</p>
      </div>
      <div className="dashboard-box my-1 text-center">
        <div>{parcels.filter(({ status }) => status === 'Cancelled').length}</div>
        <p>Cancelled Orders</p>
      </div>
      <div className="dashboard-box my-1 text-center">
        <div>{parcels.filter(({ status }) => status === 'Delivered').length}</div>
        <p>Delivered Orders</p>
      </div>
    </div>
  </div>
);

Information.propTypes = {
  parcels: PropTypes.array
}

const mapStateToProps = ({ parcels }) => ({ parcels });

export default connect(mapStateToProps)(Information);