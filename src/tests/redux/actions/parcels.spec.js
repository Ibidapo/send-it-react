import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import MockAdapter from 'axios-mock-adapter';

import axios from '../../../utils/axiosConfig';
import {
  editParcelDestination, cancelParcel, editParcelLocation, deliverParcel,
   addParcel, getAllParcels, getParcelsByUser
} from '../../../redux/actions/parcels';
import {
  ADD_PARCEL, GET_PARCELS, CANCEL_PARCEL, DELIVER_PARCEL,
  UPDATE_PARCEL_LOCATION, UPDATE_PARCEL_DESTINATION
} from '../../../redux/actions/types';
import { parcel, parcels } from '../../mock-data/parcels';

const createMockStore = configureMockStore([thunk]);
const { API_ROOT_URL } = process.env;
const mock = new MockAdapter(axios);

describe('Parcel actions', () => {
  it('Should add parcel', async () => {
    const store = createMockStore({ parcels: [] });

    mock.onPost(`${API_ROOT_URL}/parcels/`).reply(200, {
      success: 'Order created',
      parcels: parcel
    })

    await store.dispatch(addParcel(parcel));
    expect(store.getActions()).toEqual([
      {
        type: ADD_PARCEL,
        payload: parcel
      },
    ]);
  });

  it('Should fail to add parcel', async () => {
    const store = createMockStore({ parcels: [] });

    mock.onPost(`${API_ROOT_URL}/parcels/`).reply(500);

    const { error } = await store.dispatch(addParcel(parcel));
    expect(error).toEqual('Internal Server Error');
  });

  it('Should get all parcels', async () => {
    const store = createMockStore({ parcels: [] });

    mock.onGet(`${API_ROOT_URL}/parcels/`).reply(200, {
      success: 'Order(s) retrieved',
      parcels: parcels
    })

    await store.dispatch(getAllParcels());
    expect(store.getActions()).toEqual([
      {
        type: GET_PARCELS,
        payload: parcels
      },
    ]);
  });

  it('Should fail to get all parcels', async () => {
    const store = createMockStore({ parcels: [] });

    mock.onGet(`${API_ROOT_URL}/parcels/`).reply(500);

    const { error } = await store.dispatch(getAllParcels());
    expect(error).toEqual('Internal Server Error');
  });

  it('Should get parcels by a User', async () => {
    const store = createMockStore({ parcels: [] });

    mock.onGet(`${API_ROOT_URL}/users/${2}/parcels/`).reply(200, {
      success: 'Order(s) retrieved',
      parcels: parcels
    })

    await store.dispatch(getParcelsByUser(2));
    expect(store.getActions()).toEqual([
      {
        type: GET_PARCELS,
        payload: parcels
      },
    ]);
  });

  it('Should fail to get parcels by a User', async () => {
    const store = createMockStore({ parcels: [] });

    mock.onGet(`${API_ROOT_URL}/users/${2}/parcels/`).reply(500);

    const { error } = await store.dispatch(getParcelsByUser(2));
    expect(error).toEqual('Internal Server Error');
  });

  it('Should update parcels destination', async () => {
    const store = createMockStore({ parcels });

    mock.onPut(`${API_ROOT_URL}/parcels/${2}/destination`).reply(200, {
      success: 'Order\'s destination updated',
      parcels: parcel
    })

    await store.dispatch(editParcelDestination(2, { destination: 'Ikoyi, Lagos' }));
    expect(store.getActions()).toEqual([
      {
        id: 2,
        type: UPDATE_PARCEL_DESTINATION,
        payload: parcel
      },
    ]);
  });

  it('Should fail to update parcel destination', async () => {
    const store = createMockStore({ parcels: [] });

    mock.onPut(`${API_ROOT_URL}/parcels/${2}/destination`).reply(500);

    const { error } = await store.dispatch(editParcelDestination(2, { destination: 'Ikoyi, Lagos' }));
    expect(error).toEqual('Internal Server Error');
  });

  it('Should update parcels location', async () => {
    const store = createMockStore({ parcels });

    mock.onPut(`${API_ROOT_URL}/parcels/${2}/presentLocation`).reply(200, {
      success: 'Order\'s present location updated',
      parcels: parcel
    })

    await store.dispatch(editParcelLocation(2, { presentLocation: 'Ikoyi, Lagos' }));
    expect(store.getActions()).toEqual([
      {
        id: 2,
        type: UPDATE_PARCEL_LOCATION,
        payload: parcel
      },
    ]);
  });

  it('Should fail to update parcel location', async () => {
    const store = createMockStore({ parcels: [] });

    mock.onPut(`${API_ROOT_URL}/parcels/${2}/presentLocation`).reply(500);

    const { error } = await store.dispatch(editParcelLocation(2, { presentLocation: 'Ikoyi, Lagos' }));
    expect(error).toEqual('Internal Server Error');
  });

  it('Should cancel parcel', async () => {
    const store = createMockStore({ parcels });

    mock.onPut(`${API_ROOT_URL}/parcels/${2}/cancel`).reply(200, {
      success: 'Order\'s present location updated',
      parcels: parcel
    })

    await store.dispatch(cancelParcel(2));
    expect(store.getActions()).toEqual([
      {
        id: 2,
        type: CANCEL_PARCEL,
        payload: parcel
      },
    ]);
  });

  it('Should fail to cancel parcel', async () => {
    const store = createMockStore({ parcels: [] });

    mock.onPut(`${API_ROOT_URL}/parcels/${2}/cancel`).reply(500);

    const { error } = await store.dispatch(cancelParcel(2));
    expect(error).toEqual('Internal Server Error');
  });

  it('Should deliver parcel', async () => {
    const store = createMockStore({ parcels });

    mock.onPut(`${API_ROOT_URL}/parcels/${2}/status`).reply(200, {
      success: 'Order\'s present location updated',
      parcels: parcel
    })

    await store.dispatch(deliverParcel(2, { presentLocation: 'Ikoyi, Lagos' }));
    expect(store.getActions()).toEqual([
      {
        id: 2,
        type: DELIVER_PARCEL,
        payload: parcel
      },
    ]);
  });

  it('Should fail to deliver parcel', async () => {
    const store = createMockStore({ parcels });

    mock.onPut(`${API_ROOT_URL}/parcels/${2}/status`).reply(500)
    const { error } = await store.dispatch(deliverParcel(2, { presentLocation: 'Ikoyi, Lagos' }));
    expect(error).toEqual('Internal Server Error');
  });
})