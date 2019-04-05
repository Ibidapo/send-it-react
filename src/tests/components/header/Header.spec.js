import React from 'react';
import { shallow } from 'enzyme';

import { Header } from '../../../components/header/Header';

let wrapper;

describe('Test for Header Component', () => {
  it ('Should render correctly', () => {
    wrapper = shallow(<Header />);
    expect(wrapper).toMatchSnapshot();
  })

  it('Should contain, when not logged out', () => {
    const props = { isLoggedIn: false }
    wrapper = shallow(<Header {...props} />);
    expect(wrapper.find('button').length).toBe(1);
    expect(wrapper.find('Link').length).toBe(4);
    expect(wrapper.find('div').length).toBe(5)
    wrapper.find('button').at(0).simulate('click');
  })

  it('Should contain, when logged in', () => {
    const props = { isLoggedIn: true, logoutUser: jest.fn() , clearProfile: jest.fn() }
    wrapper = shallow(<Header {...props} />);
    expect(wrapper.find('Link').length).toBe(1);
    wrapper.find('Link').at(0).simulate('click');
  })
});