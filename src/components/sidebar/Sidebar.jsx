import React from 'react';
import { NavLink } from 'react-router-dom';

import './styles.scss';

const Sidebar = () => (
  <div className='side-bar'>
      <h3>My Orders</h3>
      <NavLink to='/dashboard' activeClassName='active' exact={true}>Dashboard</NavLink>
      <NavLink to='/dashboard/create' activeClassName='active'>Create</NavLink>
      <NavLink to='/dashboard/view-pending' activeClassName='active'>View Pending</NavLink>
      <NavLink to='/dashboard/view-cancelled' activeClassName='active'>View Cancelled</NavLink>
      <NavLink to='/dashboard/view-delivered' activeClassName='active'>View Delivered</NavLink>
      <h3>My Profile</h3>
      <NavLink to='/dashboard/profile' activeClassName='active'>Personal Info</NavLink>
  </div>
);

export default Sidebar;