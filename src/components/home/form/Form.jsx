import React, { Component } from 'react';
import { isEmail } from 'validator';
import PropTypes from 'prop-types';
import { toast } from 'react-toastify';

import toastOptions from '../../../utils/toastOptions';
import './styles.scss';

class Form extends Component {
  state = {
    email: "",
    password: "",
    disableButton: false,
    displaySpinner: false,
  }

  onEmailChange = ({ target: { value } }) => this.setState(() => ({ email: value }));
  onPasswordChange = ({ target: { value } }) => this.setState(() => ({ password: value }));

  onSubmit = (e) => {
    e.preventDefault();
    const { props: { onSubmit }, state: { email, password } } = this;

    if (!isEmail(email)) return toast.error('Email address is not valid', toastOptions);
    if (password.length < 4) 
      return toast.error('Password must be greater than 4 characters', toastOptions);

    onSubmit({ email, password});
  }

  render() {
    const { 
      state: { email, password }, props: { button_label },
      onEmailChange, onPasswordChange, onSubmit
    } = this;

    return (
      <form id="form" className="mx-auto" onSubmit={onSubmit}>
        <div className='pb-1'>
          <label htmlFor="form-email">Email</label>
          <input
            type="text"
            value={email}
            onChange={onEmailChange}
          />
        </div>
        <div className="py-1">
          <label htmlFor="form-pass">Password</label>
            <input
              type="password"
              value={password}
              onChange={onPasswordChange}
            />
        </div>
        <div className="text-center pt-1">
          <button id="form-btn">{button_label}</button>
        </div>  
      </form>
    );
  }
}

Form.propTypes = {
  onSubmit: PropTypes.func,
  button_label: PropTypes.string
}

export default Form;