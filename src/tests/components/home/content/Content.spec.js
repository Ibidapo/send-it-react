import React from 'react';
import { shallow } from 'enzyme';

import Content from '../../../../components/home/content/Content';

describe('Test for Content Component', () => {
  it('Should render correctly', () => {
    const wrapper = shallow(<Content />);
    expect(wrapper).toMatchSnapshot();
  })
});