import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import MockAdapter from 'axios-mock-adapter';

import axios from '../../../utils/axiosConfig';
import { getProfile, updateProfile, clearProfile } from '../../../redux/actions/profile';
import { GET_PROFILE, UPDATE_PROFILE, CLEAR_PROFILE } from '../../../redux/actions/types';
import user from '../../mock-data/users';

const createMockStore = configureMockStore([thunk]);
const { API_ROOT_URL } = process.env;
const mock = new MockAdapter(axios);

describe('Profile actions', () => {
  it('Should get User profile', async () => {
    const store = createMockStore({ profile: {} });

    await store.dispatch(getProfile(user));
    expect(store.getActions()).toEqual([{ type: GET_PROFILE, payload: user }]);
  });

  it('Should update User profile', async () => {
    const store = createMockStore({ profile: {} });

    mock.onPut(`${API_ROOT_URL}/users/`).reply(200, {
      success: 'User was successfully updated',
      user
    })

    await store.dispatch(updateProfile({ 
      firstName: user.first_name,
      lastName: user.last_name,
      phone: user.phone
    }));
    expect(store.getActions()).toEqual([{ type: UPDATE_PROFILE, payload: user }]);
  });

  it('Should fail to update User profile', async () => {
    const store = createMockStore({ auth: false, profile: {} });

    mock.onPut(`${API_ROOT_URL}/users/`).reply(500);

    const { error } = await store.dispatch(updateProfile(user));
    expect(error).toEqual('Internal Server Error');
  });

  it('Should clear User profile', async () => {
    const store = createMockStore({ profile: {} });

    await store.dispatch(clearProfile());
    expect(store.getActions()).toEqual([{ type: CLEAR_PROFILE }]);
  });
});