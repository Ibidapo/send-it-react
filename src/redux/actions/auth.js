import axios from 'axios';
import '@babel/polyfill';

import { LOGIN_USER, REGISTER_USER, LOGOUT_USER } from './types';
import escapeInputs from '../../utils/escapeInputs';

const apiEndpoint = process.env.API_ROOT_URL;

export const loginUser = (details) => async (dispatch) => {
  const escapedDetails = escapeInputs(details);

  try {
    const { 
      data: { success, token, user }
    } = await axios.post(`${apiEndpoint}/auth/login`, escapedDetails);

    localStorage.setItem('send-it-token', token);
    dispatch({ type: LOGIN_USER });
    return ({ success, user });
  } catch ({ response: { data: { error } = {} } }) {
    return ({ error: error || 'Internal Server Error' });
  }
};

export const registerUser = (details) => async (dispatch) => {
  const escapedDetails = escapeInputs(details);

  try {
    const { 
      data: { success, token, user } 
    } = await axios.post(`${apiEndpoint}/auth/signup`, escapedDetails);

    localStorage.setItem('send-it-token', token);
    dispatch({ type: REGISTER_USER });
    return ({ success, user });
  } catch ({ response: { data: { error } = {} } }) {
    return ({ error: error || 'Internal Server Error' });
  }
};

export const logoutUser = () => async (dispatch) => {
  localStorage.removeItem('send-it-token');
  dispatch({ type: LOGOUT_USER });
};