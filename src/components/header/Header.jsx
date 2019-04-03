import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { logoutUser } from '../../redux/actions/auth';
import { clearProfile } from '../../redux/actions/profile';
import './styles.scss';

class Header extends Component {
  state = {
    toggle: false
  }

  toggleHeader = () => this.setState((prevState) => ({ toggle: !prevState.toggle }));
  handleLogout = () => {
    const { props: { logoutUser, clearProfile } } = this;
    clearProfile();
    logoutUser();
  }

  render() {
    const { state: { toggle }, props: { isLoggedIn }, toggleHeader, handleLogout } = this;

    return (
      <header className="main-header">
        <div className="d-flex space-between">
          <button 
            id="menu"  
            onClick={toggleHeader}
            className={toggle ? 'active' : ''}
          >
            <div className="bar1"></div>
            <div className="bar2"></div>
            <div className="bar3"></div>
          </button>
          <Link to='/'>
            <img src="images/logo.png" alt="SendIT-logo" className="logo" />
          </Link>
        </div>
        <div id="list" className={toggle ? 'active' : ''}>
          {
            isLoggedIn ?
            (
              <React.Fragment>
                <Link to='/' onClick={handleLogout}>Logout</Link>
                <Link to="#contact" className="purple-btn">My Dashboard</Link>
              </React.Fragment>
            ) : (
              <React.Fragment>
                <Link to="#about">About</Link>
                <Link to="#contact">Contact</Link>
                <Link to="#login" className="purple-btn">Login / Register</Link>
              </React.Fragment>
            )
          }
        </div>
      </header>
    );
  }
}

Header.propTypes = {
  isLoggedIn: PropTypes.bool,
  logoutUser: PropTypes.func,
  clearProfile: PropTypes.func
}

const mapStateToProps = ({ auth: { isLoggedIn } }) => ({ isLoggedIn });
const mapDispatchToProps = ({ logoutUser, clearProfile })

export default connect(mapStateToProps, mapDispatchToProps)(Header);