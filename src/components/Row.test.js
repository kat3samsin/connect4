import React from 'react';
import { shallow } from 'enzyme';
import Row from './Row';

import configureMockStore from 'redux-mock-store';
const mockStore = configureMockStore();

describe('Row', () => {
  let wrapper;

   beforeEach(() => {
     wrapper = shallow(<Row row={[0, 0, 0]} store={mockStore}/>);
   });

  it('renders without crashing', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('renders a div and table', () => {
    expect(wrapper.find('tr')).toHaveLength(1);
  });

  it('renders 3 rows', () => {
    expect(wrapper.find('.Cell')).toHaveLength(3);
  });
});