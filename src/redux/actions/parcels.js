import axios from '../../utils/axiosConfig';
import {
  ADD_PARCEL, GET_PARCELS, CANCEL_PARCEL, DELIVER_PARCEL,
  UPDATE_PARCEL_LOCATION, UPDATE_PARCEL_DESTINATION
} from './types';
import escapeInputs from '../../utils/escapeInputs';

const apiEndpoint = process.env.API_ROOT_URL;

export const addParcel = (details) => async (dispatch) => {
  const escapedDetails = escapeInputs(details);

  try {
    const {
      data: { success, parcels }
    } = await axios.post(`${apiEndpoint}/parcels/`, escapedDetails);
    dispatch({ type: ADD_PARCEL, payload: parcels });
    return ({ success, parcels });
  } catch ({ response: { data: { error } = {} } }) {
    return ({ error: error || 'Internal Server Error' });
  }
};

export const getAllParcels = () => async (dispatch) => {
  try {
    const { data: { success, parcels } } = await axios.get(`${apiEndpoint}/parcels/`);

    dispatch({ type: GET_PARCELS, payload: parcels });
    return ({ success, parcels });
  } catch ({ response: { data: { error } = {} } }) {
    return ({ error: error || 'Internal Server Error' });
  }
};

export const getParcelsByUser = (id) => async (dispatch) => {
  try {
    const { data: { success, parcels } } = await axios.get(`${apiEndpoint}/users/${id}/parcels/`);

    dispatch({ type: GET_PARCELS, payload: parcels });
    return ({ success, parcels });
  } catch ({ response: { data: { error } = {} } }) {
    return ({ error: error || 'Internal Server Error' });
  }
};

export const editParcelDestination = (id, details) => async (dispatch) => {
  const escapedDetails = escapeInputs(details);

  try {
    const {
      data: { success, parcels }
    } = await axios.put(`${apiEndpoint}/parcels/${id}/destination`, escapedDetails);

    dispatch({ type: UPDATE_PARCEL_DESTINATION, payload: parcels, id });
    return ({ success });
  } catch ({ response: { data: { error } = {} } }) {
    return ({ error: error || 'Internal Server Error' });
  }
}

export const cancelParcel = (id) => async (dispatch) => {
  try {
    const { data: { success, parcels } } = await axios.put(`${apiEndpoint}/parcels/${id}/cancel`);

    dispatch({ type: CANCEL_PARCEL, payload: parcels, id });
    return ({ success });
  } catch ({ response: { data: { error } = {} } }) {
    return ({ error: error || 'Internal Server Error' });
  }
}

export const editParcelLocation = (id, details) => async (dispatch) => {
  const escapedDetails = escapeInputs(details);

  try {
    const {
      data: { success, parcels }
    } = await axios.put(`${apiEndpoint}/parcels/${id}/presentLocation`, escapedDetails);

    dispatch({ type: UPDATE_PARCEL_LOCATION, payload: parcels, id });
    return ({ success });
  } catch ({ response: { data: { error } = {} } }) {
    return ({ error: error || 'Internal Server Error' });
  }
}

export const deliverParcel = (id) => async (dispatch) => {
  try {
    const { 
      data: { success, parcels } 
    } = await axios.put(`${apiEndpoint}/parcels/${id}/status`, { status: 'Delivered' });

    dispatch({ type: DELIVER_PARCEL, payload: parcels, id });
    return ({ success });
  } catch ({ response: { data: { error } = {} } }) {
    return ({ error: error || 'Internal Server Error' });
  }
}
