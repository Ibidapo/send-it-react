import axios from '../../utils/axiosConfig';
import {
  ADD_PARCEL, GET_PARCELS, CANCEL_PARCEL, UPDATE_PARCEL_STATUS,
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
  } catch ({ response: { data: { error } } }) {
    return ({ error });
  }
};

export const getAllParcels = () => async (dispatch) => {
  try {
    const { data: { success, parcels } } = await axios.get(`${apiEndpoint}/parcels/`);

    dispatch({ type: GET_PARCELS, payload: parcels });
    return ({ success, parcels });
  } catch ({ response: { data: { error } } }) {
    return ({ error });
  }
};

export const getParcelsByUser = (id) => async (dispatch) => {
  try {
    const { data: { success, parcels } } = await axios.get(`${apiEndpoint}/users/${id}/parcels/`);

    dispatch({ type: GET_PARCELS, payload: parcels });
    return ({ success, parcels });
  } catch ({ response: { data: { error } } }) {
    return ({ error });
  }
};

export const editParcelDestination = (id, details) => async (dispatch) => {
  const escapedDetails = escapeInputs(details);

  try {
    const { 
      data: { success, parcels } 
    } = await axios.put(`${apiEndpoint}/parcels/${id}/destination`, escapedDetails);

    console.log('>>>', { type: UPDATE_PARCEL_DESTINATION, payload: parcels, id });
    dispatch({ type: UPDATE_PARCEL_DESTINATION, payload: parcels, id });
    return ({ success });
  } catch ({ response: { data: { error } } }) {
    return ({ error });
  }
}