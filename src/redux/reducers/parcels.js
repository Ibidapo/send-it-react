import {
  ADD_PARCEL, GET_PARCELS, CANCEL_PARCEL, DELIVER_PARCEL,
  UPDATE_PARCEL_LOCATION, UPDATE_PARCEL_DESTINATION
} from '../actions/types';

const parcelDefaultState = [];

export default (state = parcelDefaultState, action) => {
  const { type, payload, id } = action
  switch (type) {
    case ADD_PARCEL:
      return [...state, payload];

    case GET_PARCELS:
      return [...payload];

    case CANCEL_PARCEL:
    case DELIVER_PARCEL:
    case UPDATE_PARCEL_DESTINATION:
    case UPDATE_PARCEL_LOCATION:
      return state.map((parcel) => (parcel.parcel_id === id) ? payload : parcel)

    default:
      return state;
  }
};