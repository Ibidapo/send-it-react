import { GET_PROFILE, UPDATE_PROFILE, CLEAR_PROFILE } from '../actions/types';

const profileDefaultState = {};

export default (state = profileDefaultState, action) => {
  const { type, payload } = action
  switch (type) {
    case GET_PROFILE:
      return { ...payload };

    case UPDATE_PROFILE:
      return { ...state, ...payload };

    case CLEAR_PROFILE:
      return {};
    
    default:
      return state;
  }
};