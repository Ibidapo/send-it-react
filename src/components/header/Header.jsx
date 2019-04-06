import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { logoutUser } from '../../redux/actions/auth';
import { clearProfile } from '../../redux/actions/profile';
import './styles.scss';

export class Header extends Component {
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
      <header className={`main-header ${isLoggedIn ? 'dashboard' : ''}`}>
        <div className={`d-flex ${isLoggedIn ? 'w-100 space-end' : 'space-between'}`}>
          {!isLoggedIn && (
            <React.Fragment>
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
                <img src="/images/logo.png" alt="SendIT-logo" className="logo" />
              </Link>
            </React.Fragment>
          )}
          {isLoggedIn && (
            <React.Fragment>
              <Link to='/' className="purple-btn" onClick={handleLogout}>Logout</Link>
            </React.Fragment>
          )}
        </div>
        <div id="list" className={toggle ? 'active' : ''}>
          {!isLoggedIn && (
            <React.Fragment>
              <a href="#about">About</a>
              <a href="#about">Contact</a>
              <Link to="#login" className="purple-btn">Login / Register</Link>
            </React.Fragment>
          )}
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