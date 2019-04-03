import { LOGIN_USER, REGISTER_USER, LOGOUT_USER } from '../actions/types';

const authDefaultState = { isLoggedIn: false };

export default (state = authDefaultState, action) => {
  const { type } = action;

  switch (type) {
    case LOGIN_USER:
    case REGISTER_USER:
      return { isLoggedIn: true };

    case LOGOUT_USER:
      return { isLoggedIn: false };

    default:
      return state;
  }
};