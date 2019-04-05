import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import MockAdapter from 'axios-mock-adapter';

import axios from '../../../utils/axiosConfig';
import { loginUser, logoutUser, registerUser } from '../../../redux/actions/auth';
import { LOGIN_USER, REGISTER_USER, LOGOUT_USER } from '../../../redux/actions/types';
import user from '../../mock-data/users';

const createMockStore = configureMockStore([thunk]);
const { API_ROOT_URL } = process.env;
const mock = new MockAdapter(axios);

describe('User actions', () => {
  it('Should register User', async () => {
    const store = createMockStore({ auth: false, profile: {} });

    mock.onPost(`${API_ROOT_URL}/auth/signup`).reply(200, {
      success: 'User was successfully registered',
      user,
      token: 'ibidapo-token'
    })

    await store.dispatch(registerUser(user));
    expect(store.getActions()).toEqual([{ type: REGISTER_USER }]);
  });

  it('Should fail to register User', async () => {
    const store = createMockStore({ auth: false, profile: {} });

    mock.onPost(`${API_ROOT_URL}/auth/signup`).reply(500);

    const { error } = await store.dispatch(registerUser(user));
    expect(error).toEqual('Internal Server Error');
  });

  it('Should login User', async () => {
    const store = createMockStore({ auth: false, profile: {} });

    mock.onPost(`${API_ROOT_URL}/auth/login`).reply(200, {
      success: 'User was successfully logged in',
      user,
      token: 'ibidapo-token'
    })

    await store.dispatch(loginUser(user));
    expect(store.getActions()).toEqual([{ type: LOGIN_USER }]);
  });

  it('Should fail to login User', async () => {
    const store = createMockStore({ auth: false, profile: {} });

    mock.onPost(`${API_ROOT_URL}/auth/login`).reply(500);

    const { error } = await store.dispatch(loginUser(user));
    expect(error).toEqual('Internal Server Error');
  });

  it('Should logout User', async () => {
    const store = createMockStore({ auth: false, profile: {} });

    await store.dispatch(logoutUser(user));
    expect(store.getActions()).toEqual([{ type: LOGOUT_USER }]);
  });
});