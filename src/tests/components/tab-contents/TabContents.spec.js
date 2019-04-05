import React from 'react';
import { shallow } from 'enzyme';

import TabContents from '../../../components/tab-contents/TabContents';

let wrapper;

describe('Test for Header Component', () => {
  it('Should render correctly', () => {
    const props = { children: 'element' , id: 'dashboard' };
    wrapper = shallow(<TabContents {...props} />);
    expect(wrapper).toMatchSnapshot();
  })
});