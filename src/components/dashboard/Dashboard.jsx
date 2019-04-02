import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import Sidebar from '../sidebar/Sidebar';
import TabContents from '../tab-contents/TabContents';
import Profile from './profile/Profile';
import Order from './order/Order';
import Parcels from './parcels/Parcels';
import Information from './information/Information';

class Dashboard extends Component {
  componentDidMount() {
    const { 
      props: { history, isLoggedIn, getParcels, getParcelsByUser, user_id, isAdmin } 
    } = this;

    if (!isLoggedIn) return history.push('/');
    if (isAdmin === 'user') return 

  }

  render() {
    return (
      <div>
        <Sidebar />
        <TabContents id='dashboard'>
          <Switch>
            <Route exact path='/dashboard' component={Information} />
            <Route path='/dashboard/create' component={Order} />
            <Route path='/dashboard/view-pending' component={Parcels} />
            <Route path='/dashboard/view-cancelled' component={Parcels} />
            <Route path='/dashboard/view-delivered' component={Parcels} />
            <Route path='/dashboard/profile' component={Profile} />
          </Switch>
        </TabContents>
      </div>
    );
  }
} 

const mapStateToProps = ({ profile: { user_id, isAdmin } }) => ({ user_id, isAdmin });


export default Dashboard;