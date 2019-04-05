import React from 'react';
import { shallow } from 'enzyme';

import Form from '../../../../components/home/form/Form';

let wrapper;

describe('Test for Form Component', () => {
  it('Should render correctly', () => {
    wrapper = shallow(<Form />);
    expect(wrapper).toMatchSnapshot();
  })

  it('Should set email state on input change', () => {
    const value = 'foo@bar.com';

    wrapper.find('input').at(0).simulate('change', { target: { value } });
    expect(wrapper.state('email')).toBe(value);
  });

  it('Should set password state on input change', () => {
    const value = 'foobar';

    wrapper.find('input').at(1).simulate('change', { target: { value } });
    expect(wrapper.state('password')).toBe(value);
  });

  it('Should not submit form with invalid email', () => {
    const props = { onSubmit: jest.fn() }

    wrapper = shallow(<Form {...props} />)
    wrapper.find('input').at(0).simulate('change', { target: { value: 'foocom' } });
    wrapper.find('input').at(1).simulate('change', { target: { value: 'foobar' } });

    wrapper.find('form').simulate('submit', { preventDefault: () => { } });
  });

  it('Should not submit form with invalid password', () => {
    const props = { onSubmit: jest.fn() }

    wrapper = shallow(<Form {...props} />)
    wrapper.find('input').at(0).simulate('change', { target: { value: 'foo@bar.com' } });
    wrapper.find('input').at(1).simulate('change', { target: { value: '' } });
    wrapper.find('form').simulate('submit', { preventDefault: () => { } });
  });

  it('Should submit form', () => {
    const props = { onSubmit: jest.fn() }

    wrapper = shallow(<Form {...props} />)
    wrapper.find('input').at(0).simulate('change', { target: { value: 'foo@bar.com' } });
    wrapper.find('input').at(1).simulate('change', { target: { value: 'foobar' } });
    wrapper.find('form').simulate('submit', { preventDefault: () => { } });
  });
});