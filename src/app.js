import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import throttle from 'lodash/throttle';
import 'normalize.css/normalize.css';

import storeConfig from './redux/store/config';
import AppRouter from './routes/routes';
import { saveState } from './utils/localStorage';
import './styles/style.scss';

const store = storeConfig();

store.subscribe(throttle(() => {
  saveState({
    auth: store.getState().auth,
    profile: store.getState().profile
  });
}, 1000));

const app = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
);

ReactDOM.render(app, document.getElementById('app'));