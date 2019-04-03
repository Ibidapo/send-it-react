import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import Banner from './banner/Banner';
import Content from './content/Content';
import Footer from '../footer/Footer';

class Home extends Component {
  componentDidMount() {
    const { props: { history, isLoggedIn } } = this;
    if (isLoggedIn) return history.push('/dashboard');
  }

  render() {
    return (
      <div>
        <Banner />
        <Content />
        <Footer />
      </div>
    ) 
  }
}

Home.propTypes = {
  history: PropTypes.object,
  isLoggedIn: PropTypes.bool
}

const mapStateToProps = ({ auth: { isLoggedIn } }) => ({ isLoggedIn });

export default connect(mapStateToProps)(Home);