import '@babel/polyfill';

import parcelsReducer from '../../../redux/reducers/parcels';
import {
  ADD_PARCEL, GET_PARCELS, CANCEL_PARCEL, DELIVER_PARCEL,
  UPDATE_PARCEL_LOCATION, UPDATE_PARCEL_DESTINATION
} from '../../../redux/actions/types';
import { parcel, parcels } from '../../mock-data/parcels';

describe('Test for Parcel Reducers', () => {
  it('Should return default state when initialized', () => {
    const state = parcelsReducer(undefined, {
      type: '@@INIT'
    });
    expect(state).toEqual([]);
  });

  it('Should add Parcel', () => {
    const state = parcelsReducer(parcels, { type: ADD_PARCEL, payload: parcel });
    expect(state.length).toEqual(4);
  });

  it('Should get all Parcels', () => {
    const state = parcelsReducer(parcels, { type: GET_PARCELS, payload: parcels });
    expect(state.length).toEqual(parcels.length);
  });

  it('Should update Parcel location', () => {
    const state = parcelsReducer(parcels, { type: UPDATE_PARCEL_LOCATION, payload: parcel, id: 2 });
    expect(state.length).toEqual(parcels.length);
  });

  it('Should update Parcel destination', () => {
    const state = parcelsReducer(parcels, { type: UPDATE_PARCEL_DESTINATION, payload: parcel, id: 2 });
    expect(state.length).toEqual(parcels.length);
  });

  it('Should cancel Parcels', () => {
    const state = parcelsReducer(parcels, { type: CANCEL_PARCEL, payload: parcel, id:2 });
    expect(state.length).toEqual(parcels.length);
  });

  it('Should deliver Parcels', () => {
    const state = parcelsReducer(parcels, { type: DELIVER_PARCEL, payload: parcel, id: 2 });
    expect(state.length).toEqual(parcels.length);
  });
});