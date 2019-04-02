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
      payload: {
        first_name: user.first_name,
        last_name: user.last_name,
        phone: user.phone
      } 
    });
    return ({ success, user });
  } catch ({ response: { data: { error } } }) {
    return ({ error });
  }
}

export const clearProfile = () => async (dispatch) => {
  dispatch({ type: CLEAR_PROFILE });
}
