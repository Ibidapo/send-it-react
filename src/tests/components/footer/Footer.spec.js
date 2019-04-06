import React from 'react';
import { shallow } from 'enzyme';

import Footer from '../../../components/footer/Footer';

describe('Test for Footer Component', () => {
  it('Should render correctly', () => {
    const wrapper = shallow(<Footer />);
    expect(wrapper).toMatchSnapshot();
  })
});