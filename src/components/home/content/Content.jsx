import React from 'react';
import { NavLink, Route, Switch } from 'react-router-dom';

import TabContents from '../../tab-contents/TabContents';
import LoginForm from '../form/LoginForm';
import RegisterForm from '../form/RegisterForm';
import './styles.scss';

const Content = () => (
  <div id="content" className="d-flex p-2">
    <div className="w-50 my-2 mx-auto">
      <div className="content-intro mx-auto">
        <h3>Need to send a parcel but aren’t sure where to start?</h3>
        <p>At SendIT, we know how important it is to have a parcel delivery service you can trust.
          That’s why we ’ve worked hard to bring you a broad range of delivery and collection options to suit
          your every need.</p>
        <p>Another benefit of sending a parcel with SendIT is the peace of mind you get from our comprehensive
          parcel tracking service, which is available as standard when you book with us.</p>
        <p>Register or Login to get started.</p>
      </div>
    </div>
    <div className="w-50 my-2 mx-auto">
      <div className='form-box mx-auto'>
        <nav className='d-flex tab-group'>
          <NavLink activeClassName='active' to='/' exact={true}>Login</NavLink>
          <NavLink activeClassName='active' to='/register'>Sign Up</NavLink>
        </nav>
        <TabContents>
          <Switch>
            <Route exact path='/' component={LoginForm} />
            <Route path='/register' component={RegisterForm} />
          </Switch>
        </TabContents>
      </div>
    </div>
  </div>
);

export default Content;