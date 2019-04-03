import React, { Component } from 'react';
import { connect } from 'react-redux';
import { NavLink, Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import './styles.scss';

class Sidebar extends Component {
  state = {
    toggle: false
  }

  onToggleSideBar = (e) => {
    e.preventDefault();
    this.setState((prevState) => ({ toggle: !prevState.toggle }))
  };

  render() {
    const { props: { is_admin }, state: { toggle }, onToggleSideBar } = this;

    return (
      <div className={`side-bar ${toggle ? 'active' : ''}`}>
        <button
          id="menu"
          onClick={onToggleSideBar}
          className={toggle ? 'active' : ''}
        >
          <div className="bar1"></div>
          <div className="bar2"></div>
          <div className="bar3"></div>
        </button>
        <div className='content'>
          <Link to='/'>
            <img src="images/logo.png" alt="SendIT-logo" className="logo" />
          </Link>
          <h3>{is_admin ? 'Admin' : 'My Orders'} </h3>
          <NavLink to='/dashboard' activeClassName='active' exact={true}>Dashboard</NavLink>
          <NavLink to='/dashboard/create' activeClassName='active'>Create</NavLink>
          <NavLink to='/dashboard/view-pending' activeClassName='active'>View Pending</NavLink>
          <NavLink to='/dashboard/view-cancelled' activeClassName='active'>View Cancelled</NavLink>
          <NavLink to='/dashboard/view-delivered' activeClassName='active'>View Delivered</NavLink>
          <h3>{!is_admin && 'My'} Profile</h3>
          <NavLink to='/dashboard/profile' activeClassName='active'>Personal Info</NavLink>
        </div>
      </div>
    )
  }
}

Sidebar.propTypes = {
  is_admin: PropTypes.bool
}

const mapStateToProps = ({ profile: { is_admin } }) => ({ is_admin });

export default connect(mapStateToProps)(Sidebar);