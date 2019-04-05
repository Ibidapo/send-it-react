import React from 'react';
import { shallow } from 'enzyme';

import Form from '../../../../components/home/form/Form';
import { RegisterForm } from '../../../../components/home/form/RegisterForm';

let wrapper;

describe('Test for LoginForm Component', () => {
  it('Should render LoginForm Component', () => {
    const props = { isLoggedIn: false, loginUser: jest.fn(), getProfile: jest.fn(), history: { push: jest.fn() } }
    wrapper = shallow(<RegisterForm {...props} />);
    expect(wrapper).toMatchSnapshot();
  })

  it('Should submit form', () => {
    expect(wrapper.find(Form).length).toBe(1);
    wrapper.find(Form).at(0).simulate('submit', { preventDefault: () => { } });
  });

  it('Should submit form when logged in', () => {
    const props = {
      isLoggedIn: true,
      loginUser: jest.fn(() => Promise.resolve({})),
      getProfile: jest.fn(),
      history: { push: jest.fn() }
    }
    wrapper = shallow(<RegisterForm {...props} />);
    wrapper.find(Form).at(0).simulate('submit', { preventDefault: () => { } });
  })
});