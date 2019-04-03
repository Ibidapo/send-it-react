import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

import Header from '../components/header/Header';
import Home from '../components/home/Home';
import Dashboard from '../components/dashboard/Dashboard';
import 'react-toastify/dist/ReactToastify.css';

const AppRouter = () => (
  <BrowserRouter >
    <div>
      <Header />
      <ToastContainer />
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/register' component={Home} />
        <Route path='/dashboard' component={Dashboard} />
      </Switch>
    </div>
  </BrowserRouter >
)

export default AppRouter;
