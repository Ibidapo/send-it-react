import '@babel/polyfill';

import authReducers from '../../../redux/reducers/auth';
import { LOGIN_USER, REGISTER_USER, LOGOUT_USER } from '../../../redux/actions/types';
import { loggedIn, loggedOut } from '../../mock-data/auths';

describe('Test for Auth Reducers', () => {
  it('Should return default state when initialized', () => {
    const state = authReducers(undefined, {
      type: '@@INIT'
    });
    expect(state).toEqual(loggedOut);
  });

  it('Should update Auth with USER sign out', () => {
    const state = authReducers(loggedOut, { type: REGISTER_USER });
    expect(state).toEqual(loggedIn);
  });

  it('Should update Auth with USER login', () => {
    const state = authReducers(loggedOut, { type: LOGIN_USER });
    expect(state).toEqual(loggedIn);
  });

  it('Should update Auth with USER logout', () => {
    const state = authReducers(loggedIn, { type: LOGOUT_USER });
    expect(state).toEqual(loggedOut);
  });
});
