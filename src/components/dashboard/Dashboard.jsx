import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Switch, Route } from 'react-router-dom';
import PropTypes from 'prop-types';

import Sidebar from '../sidebar/Sidebar';
import TabContents from '../tab-contents/TabContents';
import Profile from './profile/Profile';
import Order from './order/Order';
import Parcels from './parcels/Parcels';
import Information from './information/Information';
import { getAllParcels, getParcelsByUser } from '../../redux/actions/parcels';
import filterParcels from '../../utils/filterParcels';

class Dashboard extends Component {
  componentDidMount() {
    const { 
      props: { getAllParcels, getParcelsByUser, user_id, is_admin, isLoggedIn, history } 
    } = this;
    if (!isLoggedIn) {
      return history.push('/');
    }

    if (is_admin) {
      return getAllParcels()
    }
    getParcelsByUser(user_id);
  }

  render() {
    const { props: { parcels } } = this;

    return (
      <div>
        <Sidebar />
        <TabContents id='dashboard'>
          <Switch>
            <Route exact path='/dashboard' component={Information} />
            <Route path='/dashboard/create' component={Order} />
            <Route path='/dashboard/view-pending' component={() => (<Parcels items={filterParcels(parcels, 'In Transit')} />)} />
            <Route path='/dashboard/view-cancelled' component={() => (<Parcels items={filterParcels(parcels, 'Cancelled')} />)} />
            <Route path='/dashboard/view-delivered' component={() => (<Parcels items={filterParcels(parcels, 'Delivered')} />)} />
            <Route path='/dashboard/profile' component={Profile} />
          </Switch>
        </TabContents>
      </div>
    );
  }
} 

Dashboard.propTypes = {
  getAllParcels: PropTypes.func,
  getParcelsByUser: PropTypes.func,
  user_id: PropTypes.number,
  is_admin: PropTypes.bool,
  parcels: PropTypes.array,
  isLoggedIn: PropTypes.bool,
  history: PropTypes.object
}

const mapStateToProps = ({
  profile: { user_id, is_admin }, auth: { isLoggedIn }, parcels 
}) => ({ user_id, is_admin, parcels, isLoggedIn });
const mapDispatchToProps = ({ getAllParcels, getParcelsByUser });

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);