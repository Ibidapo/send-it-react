import axios from '../../utils/axiosConfig';

import { GET_PROFILE, UPDATE_PROFILE, CLEAR_PROFILE } from './types';
import escapeInputs from '../../utils/escapeInputs';

const apiEndpoint = process.env.API_ROOT_URL;

export const getProfile = (details) => async (dispatch) => {
  dispatch({
    type: GET_PROFILE,
    payload: details
  });
}

export const updateProfile = (details) => async (dispatch) => {
  const escapedDetails = escapeInputs(details);

  try {
    const { 
      data: { success, user } 
    } = await axios.put(`${apiEndpoint}/users/`, escapedDetails);

    dispatch({ 
      type: UPDATE_PROFILE,
      payload: user
    });
    return ({ success, user });
  } catch ({ response: { data: { error } = {} } }) {
    return ({ error: error || 'Internal Server Error' });
  }
}

export const clearProfile = () => async (dispatch) => {
  dispatch({ type: CLEAR_PROFILE });
}
