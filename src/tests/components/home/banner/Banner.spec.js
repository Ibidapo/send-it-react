import React from 'react';
import { shallow } from 'enzyme';

import Banner from '../../../../components/home/banner/Banner';

describe('Test for Footer Component', () => {
  it('Should render correctly', () => {
    const wrapper = shallow(<Banner />);
    expect(wrapper).toMatchSnapshot();
  })
});