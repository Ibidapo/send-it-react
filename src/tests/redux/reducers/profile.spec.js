import '@babel/polyfill';

import profileReducer from '../../../redux/reducers/profile';
import { GET_PROFILE, UPDATE_PROFILE, CLEAR_PROFILE } from '../../../redux/actions/types';
import user from '../../mock-data/users';

describe('Test for Profile Reducers', () => {
  it('Should return default state when initialized', () => {
    const state = profileReducer(undefined, {
      type: '@@INIT'
    });
    expect(state).toEqual({});
  });

  it('Should get a User profile', () => {
    const state = profileReducer(user, { type: GET_PROFILE, payload: user });
    expect(state).toEqual(user);
  });

  it('Should get update a User profile', () => {
    const state = profileReducer(user, { type: UPDATE_PROFILE, payload: user });
    expect(state).toEqual(user);
  });

  it('Should clear a User profile', () => {
    const state = profileReducer(user, { type: CLEAR_PROFILE });
    expect(state).toEqual({});
  });
});