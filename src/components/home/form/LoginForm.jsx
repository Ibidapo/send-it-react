import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { toast } from 'react-toastify';

import Form from './Form';
import { loginUser } from '../../../redux/actions/auth';
import { getProfile } from '../../../redux/actions/profile';
import toastOptions from '../../../utils/toastOptions';

const LoginForm = ({ isLoggedIn, loginUser, getProfile, history }) => {
  const onSubmit = async ({ email, password }) => {
    if (isLoggedIn) return history.push('/dashboard');

    const { error, success, user } = await loginUser({ email, password });

    if (error) return toast.error(error, toastOptions);

    await getProfile(user)
    history.push('/dashboard');
    toast.success(success, toastOptions);
  }

  return (
    <Form button_label='Login' onSubmit={onSubmit} />
  );
}

LoginForm.propTypes = {
  isLoggedIn: PropTypes.bool,
  loginUser: PropTypes.func,
  history: PropTypes.object,
  getProfile: PropTypes.func
}

const mapStateToProps = ({ auth: { isLoggedIn }, profile }) => ({ isLoggedIn, profile });
const mapDispatchToProps = ({ loginUser, getProfile });

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);