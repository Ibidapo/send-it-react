import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import thunk from 'redux-thunk';

import authReducer from '../reducers/auth';
import profileReducer from '../reducers/profile';
import parcelsReducer from '../reducers/parcels';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default () => createStore(
  combineReducers({
    auth: authReducer,
    profile: profileReducer,
    parcels: parcelsReducer
  }),
  composeEnhancers(applyMiddleware(thunk))
);