import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { toast } from 'react-toastify';

import { updateProfile } from '../../../redux/actions/profile';
import toastOptions from '../../../utils/toastOptions';
import './styles.scss';

class Profile extends Component {
  state = {
    firstName: this.props.profile.first_name || '',
    lastName: this.props.profile.last_name || '',
    phone: this.props.profile.phone || ''
  }

  onFirstNameChange = ({ target: { value } }) => this.setState({ firstName: value });
  onLastNameChange = ({ target: { value } }) => this.setState({ lastName: value });
  onMobileChange = ({ target: { value } }) => this.setState({ phone: value });

  onSubmit = async (e) => {
    e.preventDefault();
    const { state: { firstName, lastName, phone }, props: { updateProfile } } = this;

    if (!firstName || !lastName || !phone) {
      return toast.error('Input field(s) cannot be empty', toastOptions);
    }

    const { error, success, user } = await updateProfile({ firstName, lastName, phone });

    if (error) return toast.error(error, toastOptions);
    const { first_name, last_name } = user;
    this.setState({ firstName: first_name, lastName: last_name, phone: user.phone });
    toast.success(success, toastOptions);
  }

  render() {
    const { 
      state: { firstName, lastName, phone },
      props: { profile: { email, user_id, joined_on } },
      onSubmit, onFirstNameChange, onLastNameChange, onMobileChange
    } = this;
    
    return (
      <div className='box'>
        <form className="mx-auto" onSubmit={onSubmit}>
          <div className="d-flex space-evenly">
            <div className="w-40">
              <label htmlFor="first-name">First Name</label>
              <input 
                type="text" 
                id="first-name"
                value={firstName}
                onChange={onFirstNameChange} 
              />
            </div>
            <div className="w-40">
              <label htmlFor="last-name">Last Name</label>
              <input 
                type="text" 
                id="last-name" 
                value={lastName}
                onChange={onLastNameChange} 
              />
            </div>
            <div className="w-40">
              <label htmlFor="mobile-nos">Mobile Number</label>
              <input 
                type="number" 
                id="mobile-nos"
                value={phone}
                onChange={onMobileChange}
              />
            </div>
            <div className="w-40">
              <div className="label">Email</div>
              <div className="input">{email}</div>
            </div>
            <div className="w-40">
              <div className="label">User ID</div>
              <div className="input">{user_id}</div>
            </div>
            <div className="w-40">
              <div className="label">Joined</div>
              <div className="input">{joined_on}</div>
            </div>
          </div>
          <div className="text-center my-1">
            <button>Edit</button>
          </div>
        </form>
      </div>
    )
  }
}

Profile.propTypes = {
  updateProfile: PropTypes.func,
  isLoggedIn: PropTypes.bool,
  profile: PropTypes.object 
}

const mapStateToProps = ({ auth: { isLoggedIn }, profile }) => ({ isLoggedIn, profile });
const mapDispatchToProps = ({ updateProfile });

export default connect(mapStateToProps, mapDispatchToProps)(Profile);